import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errorMessage: string;
    try {
      // Try to parse error as JSON first
      const errorData = await res.json();
      errorMessage = errorData.message || JSON.stringify(errorData);
    } catch {
      // If not JSON, get as text
      errorMessage = await res.text() || res.statusText;
    }
    throw new Error(`API Error (${res.status}): ${errorMessage}`);
  }
}

// Determine if we're in a Vercel production environment or local environment
const isVercelProduction = typeof window !== 'undefined' && window.location.hostname.includes('vercel');

// Helper to build API URLs, accounting for Vercel deployment
export function getApiUrl(path: string): string {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For API routes in Vercel, use the absolute path
  if (isVercelProduction && cleanPath.startsWith('api')) {
    return `/${cleanPath}`;
  }
  
  return cleanPath;
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  try {
    // Get the full API URL, accounting for Vercel deployment
    const fullUrl = url.startsWith('http') ? url : getApiUrl(url);
    
    const res = await fetch(fullUrl, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    // Không throw error ngay, để caller có thể đọc dữ liệu JSON và xử lý kết quả
    if (!res.ok) {
      console.warn(`API request failed: ${res.status} - ${res.statusText}`);
    }
    
    return res;
  } catch (error) {
    console.error(`API Request Error (${method} ${url}):`, error);
    throw error;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Get the full API URL, accounting for Vercel deployment
    const url = queryKey[0] as string;
    const fullUrl = url.startsWith('http') ? url : getApiUrl(url);
    
    try {
      const res = await fetch(fullUrl, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    } catch (error) {
      console.error(`Query Error (${url}):`, error);
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});
