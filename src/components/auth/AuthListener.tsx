import { onMount, onCleanup } from 'solid-js'
import { useAuth } from '../../hooks/useAuth';
import { setAuth } from '../../stores/auth';
import { supabaseBrowserClient } from '../../lib/supabase/client'

export default function AuthListener() {
    onMount(() => {
        const supabase = supabaseBrowserClient;

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            console.log(session);
            setAuth(session?.user ?? null, session)
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setAuth(session?.user ?? null, session)

                // Handle redirects based on auth state changes
                if (event === 'SIGNED_IN') {
                    // Redirect to dashboard if on auth pages
                    if (window.location.pathname.startsWith('/auth/')) {
                        window.location.href = '/dashboard'
                    }
                } else if (event === 'SIGNED_OUT') {
                    // Redirect to login if on protected pages
                    const publicPaths = ['/auth/login', '/auth/register', '/auth/forgot-password', '/']
                    if (!publicPaths.includes(window.location.pathname)) {
                        window.location.href = '/auth/login'
                    }
                }
            }
        )

        onCleanup(() => {
            subscription.unsubscribe()
        })
    })

    return null // This component doesn't render anything
}