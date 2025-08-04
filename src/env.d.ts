/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Session, User } from "@supabase/supabase-js";

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_ANON_KEY: string
  readonly SUPABASE_SERVICE_ROLE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface Locals {
    session: Session | null;
    user: User | null;
    // Add any other custom locals you need
  }
}