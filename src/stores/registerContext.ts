// stores/onboardingContext.ts
import { atom } from 'nanostores';

export type RegisterContext = {
    intent: 'register' | 'enroll' | 'subscribe' | 'challenge';
    details?: string; // add reference ids either of program or challenge
}

export const registerContext = atom<RegisterContext>({
    intent: "register",
    details: ""
});