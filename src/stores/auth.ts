import { atom, computed } from 'nanostores';
import type { User, Session } from '@supabase/supabase-js';
import type { AuthStoreState } from '../types';


export const authStore = atom<AuthStoreState>({
  user: null,
  session: null,
  loading: true
})

export const isAuthenticated = computed(authStore, (auth) => !!auth.user)

export const setAuth = (user: User | null, session: Session | null) => {
  authStore.set({ user, session, loading: false })
}

export const setLoading = (loading: boolean) => {
  authStore.set({ ...authStore.get(), loading })
}