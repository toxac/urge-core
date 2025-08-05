// src/stores/profile.store.ts
import { atom, computed } from 'nanostores';
import type { Database } from '../../database.types';

type Profile = Database['public']['Tables']['user_profiles']['Row'];

// Explicitly type the required fields
const REQUIRED_FIELDS = [
  'address',
  'age_group',
  'bio',
  'first_name',
  'gender',
  'last_name',
  'username'
] as const satisfies ReadonlyArray<keyof Profile>;

export const profileStore = atom<Profile | null>(null);

// Helper to check required fields
export const isProfileComplete = computed(profileStore, (profile) => {
  if (!profile) return false;
  
  return REQUIRED_FIELDS.every((field) => {
    const value = profile[field];
    
    // Handle Json fields differently
    if (field === 'address') {
      return !!value && Object.keys(value).length > 0;
    }
    
    // Standard string/null checks for other fields
    return value !== null && value !== '';
  });
});