import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import type { Session, User } from '@supabase/supabase-js'

interface AuthState {
  session: Session | null
  user: User | null
  isLoading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    session: null,
    user: null,
    isLoading: true,
  }),

  getters: {
    isAuthenticated: (state) => !!state.session,
    getSession: (state) => state.session,
    getUser: (state) => state.user,
    getToken: (state) => state.session?.access_token,
  },

  actions: {
    async initialize() {
      try {
        console.log('initializing')
        const {
          data: { session },
        } = await supabase.auth.getSession()
        this.session = session
        this.user = session?.user ?? null
      } catch (error) {
        console.error('Error initializing auth:', error)
        this.session = null
        this.user = null
      } finally {
        this.isLoading = false
      }
    },

    async setSession(session: Session | null) {
      this.session = session
      this.user = session?.user ?? null
    },

    async clearSession() {
      this.session = null
      this.user = null
    },
  },
})
