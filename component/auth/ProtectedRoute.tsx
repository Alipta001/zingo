"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({
  children,
  requiredPage = "/auth/signIn",
}: {
  children: React.ReactNode;
  requiredPage?: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    // Check if token exists
    if (token) {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      setIsAuthenticated(false);
      // Redirect to login page
      router.push(requiredPage);
      setIsLoading(false);
    }
  }, [router, requiredPage]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 animate-spin text-rose-600 mb-4" />
        <p className="font-black uppercase tracking-widest text-slate-400">
          Verifying access...
        </p>
      </div>
    );
  }

  // If not authenticated, don't render children
  if (!isAuthenticated) {
    return null;
  }

  // Render children if authenticated
  return <>{children}</>;
}
