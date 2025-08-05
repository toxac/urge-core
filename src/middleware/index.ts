import { defineMiddleware } from "astro:middleware";
import { createSupabaseServerClient } from "../lib/supabase/server";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  console.log("Middleware executing for path:", pathname);

  const supabase = createSupabaseServerClient({
    request: context.request,
    cookies: context.cookies
  });

  // get user session
  const { data: { session } } = await supabase.auth.getSession();

  // Add session to context locals
  context.locals.session = session
  context.locals.user = session?.user ?? null

  return next()

})