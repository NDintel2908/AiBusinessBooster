import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md mx-4 bg-brand-navy/20 backdrop-blur border border-brand-primary/30">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-brand-accent" />
            <h1 className="text-2xl font-bold text-white">Xin chào, trang đang bảo trì</h1>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            Vui lòng quay lại sau ngày 20/11/2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
