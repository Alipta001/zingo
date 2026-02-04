import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Protect these route prefixes
const PROTECTED_PREFIXES = [
  "/cart",
  "/orders",
  "/checkout",
  "/place-order",
  "/account",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // only run on protected prefixes
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // read token cookie
  const token = request.cookies.get("token")?.value;
  if (!token) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/auth/signIn";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart/:path*",
    "/orders/:path*",
    "/checkout/:path*",
    "/place-order/:path*",
    "/account/:path*",
  ],
};
