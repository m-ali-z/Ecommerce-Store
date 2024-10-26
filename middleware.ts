import { NextRequest, NextResponse } from "next/server";
import { apiAuthPrefix, authRoutes } from "./routes";
import next from "next";
import { redirect } from "next/navigation";
import { auth } from "./auth";
export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const session = await auth();
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (nextUrl.pathname.startsWith("/products") && !session?.user) {
    return Response.redirect(new URL("/", nextUrl));
  }
}

// Apply middleware to all routes (you can specify the scope if needed)
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
