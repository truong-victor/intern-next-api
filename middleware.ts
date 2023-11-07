import { NextRequest, NextResponse } from "next/server";
import { tokenUtils } from "./ultis/BE/token";

export interface DecodeTokenProps {
  email: string;
  id: number;
}

export const config = {
  matcher: [
    "/api/v1/auth/me",
    "/api/v1/product/:path*",
    "/api/v1/order/:path*",
    "/api/v1/admin/:path*",
  ],
};

export const skipPath = ["/v1/auth/logout", "/v1/auth/login"];

export const skipModules = ["auth"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname as string;

  const handleNotAuth = (url: string) => {
    if (!skipPath.includes(path)) {
      return NextResponse.redirect(new URL(url, req.url));
    }
  };

  const handleAuth = (decodeToken: any) => {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("user", JSON.stringify(decodeToken));
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  };

  const token = req.headers.get("x-access-token");

  const regex = /\/api\/v[123456789]\/([^/]+)\//;

  const url = req.url;

  const checkModule = url.match(regex);
  console.log(
    "🚀 ~ file: middleware.ts:44 ~ middleware ~ checkModule:",
    checkModule
  );

  const module =
    checkModule && !skipModules.includes(checkModule[1])
      ? checkModule[1]
      : null;
  console.log("🚀 check module:", module);

  try {
    const decodeToken = await tokenUtils.verify(token ?? "");

    if (!token || decodeToken?.id === -1) {
      return handleNotAuth("/auth/logout");
    } else {
      const { roles, id, email } = decodeToken;

      if (module) {
        if (roles?.includes(module)) {
          console.log("🚀 pass module:", module);

          return handleAuth(decodeToken);
        } else {
          return handleNotAuth("/403");
        }
      } else {
        return handleAuth(decodeToken);
      }
    }
  } catch (error) {
    return handleNotAuth("/auth/logout");
  }
}
