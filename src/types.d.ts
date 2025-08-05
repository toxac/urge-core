// Authentication, User and Session Types
export interface AuthStoreState {
  user: User | null
  session: Session | null
  loading: boolean
}