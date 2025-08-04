
import { createBrowserClient } from '@supabase/ssr'

export const createSupbaseBrowserClient = () => {
    return createBrowserClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  )
} 