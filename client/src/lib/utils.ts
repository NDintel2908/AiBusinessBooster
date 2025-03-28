import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formData: any,
  callback: (success: boolean, message: string) => void
) {
  e.preventDefault();
  
  // Validate form
  if (!formData.name || !formData.email || !formData.company) {
    callback(false, "Please fill in all required fields");
    return;
  }
  
  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    callback(false, "Please enter a valid email address");
    return;
  }
  
  // Submit form
  const apiUrl = "/api/contact";
  
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      return response.json();
    })
    .then(() => {
      callback(true, "Your inquiry has been sent successfully!");
    })
    .catch((error) => {
      callback(false, error.message || "Failed to send your inquiry. Please try again.");
    });
}
