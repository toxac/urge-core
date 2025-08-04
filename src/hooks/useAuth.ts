import { createSignal, createEffect, onMount } from 'solid-js'
import { useStore } from '@nanostores/solid'
import { authStore, setAuth, setLoading } from '../stores/auth'
import { createSupbaseBrowserClient } from '../lib/supabase/client'


export function useAuth() {
    const auth = useStore(authStore)
    const supabase = createSupbaseBrowserClient();

    const [error, setError] = createSignal<string | null>(null)

    onMount(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setAuth(session?.user ?? null, session)
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setAuth(session?.user ?? null, session)
            }
        )

        return () => subscription.unsubscribe()
    })

    const login = async (email: string, password: string) => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return { success: true }
        } catch (err: any) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }

    const register = async (email: string, password: string, confirmPassword: string) => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, confirmPassword })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return { success: true, message: data.message }
        } catch (err: any) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }

    const forgotPassword = async (email: string) => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return { success: true, message: data.message }
        } catch (err: any) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST'
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error)
            }

            return { success: true }
        } catch (err: any) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }

    return {
        auth,
        error,
        login,
        register,
        forgotPassword,
        logout
    }
}