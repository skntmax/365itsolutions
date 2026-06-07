import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const targetHost = "365itsolution.com";
  const currentHost = nextUrl.hostname.replace(/^www\./, "");

  // Prevent redirect loop when already on target domain.
  if (currentHost === targetHost) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(nextUrl.pathname + nextUrl.search, `https://${targetHost}`);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Skip Next internals, APIs, and static files.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
