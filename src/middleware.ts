import createMiddleware from "next-intl/middleware";
import { locales } from "./config";
import { NextRequest } from "next/server";
import { getLocaleInHeaderRequest, resolveLocale } from "./util/getLocale";

export default async function middleware(request: NextRequest) {
  const requestLocale = getLocaleInHeaderRequest(request);

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: resolveLocale(requestLocale),
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-BR|en)/:path*"],
};
