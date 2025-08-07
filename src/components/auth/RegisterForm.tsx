import { createSignal, Show } from "solid-js";
import { Icon } from '@iconify-icon/solid';
import { navigate } from "astro:transitions/client";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { z } from "zod";
import { supabaseBrowserClient } from "../../lib/supabase/client";

const schema = z.object({
    username: z.string()
        .min(3, "Must be at least 3 characters")
        .max(20, "Must be at most 20 characters")
        .regex(/^[a-zA-Z0-9_.]+$/, "Only letters, numbers, _ and . allowed"),
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Must be at least 8 characters")
        .regex(/[A-Z]/, "Needs at least one uppercase letter")
        .regex(/[a-z]/, "Needs at least one lowercase letter")
        .regex(/[0-9]/, "Needs at least one number")
        .regex(/[^A-Za-z0-9]/, "Needs at least one special character"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export default function RegisterForm() {
    const [isSuccess, setIsSuccess] = createSignal(false);
    const [showPassword, setShowPassword] = createSignal(false);
    const [showConfirmPassword, setShowConfirmPassword] = createSignal(false);
    const [isCheckingUsername, setIsCheckingUsername] = createSignal(false);
    const [usernameAvailable, setUsernameAvailable] = createSignal<boolean | null>(null);
    const supabase = supabaseBrowserClient;

    const { form, errors, data, isSubmitting } = createForm({
        extend: validator({ schema }),
        onSubmit: async (values) => {
            if (usernameAvailable() !== true) {
                return;
            }

            try {
                const { data: authData, error: authError } = await supabase.auth.signUp({
                    email: values.email,
                    password: values.password,
                    options: {
                        data: {
                            username: values.username
                        }
                    }
                });

                if (authError) throw authError;

                if (authData.user) {
                    await supabase.from("user_profiles").insert({
                        user_id: authData.user.id,
                        username: values.username
                    });
                }

                setIsSuccess(true);
            } catch (error) {
                console.error("Registration error:", error);
            }
        }
    });

    const checkUsername = async (username: string) => {
        if (username.length < 3) {
            setUsernameAvailable(null);
            return;
        }

        setIsCheckingUsername(true);
        try {
            const { data, error } = await supabase
                .from("user_profiles")
                .select("username")
                .eq("username", username)
                .maybeSingle();

            if (error) throw error;
            setUsernameAvailable(!data);
        } catch (error) {
            console.error("Username check error:", error);
        } finally {
            setIsCheckingUsername(false);
        }
    };

    return (
        <div class="card w-full md:w-96 lg:w-1/4 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">
                    {isSuccess() ? "Account Created!" : "Register"}
                </h2>

                <Show when={!isSuccess()}>
                    <form use:form class="flex flex-col gap-3">
                        {/* Username Field */}
                        <div class="form-control w-full">
                            <label class="input">
                                Username

                                <input
                                    name="username"
                                    type="text"
                                    class="input input-bordered w-full"
                                    placeholder="your_username"
                                    onBlur={(e) => checkUsername(e.currentTarget.value)}
                                />
                            </label>
                            <div class="h-6 mt-1 text-sm">
                                {isCheckingUsername() && <span class="text-info">Checking...</span>}
                                {usernameAvailable() === true && <span class="text-success">✓ Available</span>}
                                {usernameAvailable() === false && <span class="text-error">✗ Taken</span>}
                                {errors().username && <span class="text-error">{errors().username}</span>}
                            </div>

                        </div>

                        {/* Email Field */}
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                class="input input-bordered w-full"
                                placeholder="your@email.com"
                            />
                            {errors().email && <span class="text-error text-sm">{errors().email}</span>}
                        </div>

                        {/* Password Fields */}
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <div class="relative">
                                <input
                                    name="password"
                                    type={showPassword() ? "text" : "password"}
                                    class="input input-bordered w-full pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    class="absolute inset-y-0 right-0 pr-3"
                                    onClick={() => setShowPassword(!showPassword())}
                                >
                                    {showPassword() ?
                                        <Icon icon="mdi:eye-off" width="24" height="24" /> :
                                        <Icon icon="mdi:eye" width="24" height="24" />
                                    }
                                </button>
                            </div>
                            {errors().password && <span class="text-error text-sm">{errors().password}</span>}
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <div class="relative">
                                <input
                                    name="confirmPassword"
                                    type={showConfirmPassword() ? "text" : "password"}
                                    class="input input-bordered w-full pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    class="absolute inset-y-0 right-0 pr-3"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword())}
                                >
                                    {showConfirmPassword() ?
                                        <Icon icon="mdi:eye-off" width="24" height="24" /> :
                                        <Icon icon="mdi:eye" width="24" height="24" />
                                    }
                                </button>
                            </div>
                            {errors().confirmPassword && (
                                <span class="text-error text-sm">{errors().confirmPassword}</span>
                            )}
                        </div>

                        <button
                            class="btn btn-primary mt-4"
                            type="submit"
                            disabled={isSubmitting() || isCheckingUsername() || usernameAvailable() !== true}
                        >
                            {isSubmitting() ? "Creating account..." : "Register"}
                        </button>
                    </form>
                </Show>

                <Show when={isSuccess()}>
                    <div class="flex flex-col items-center text-center">
                        <div class="text-5xl mb-4">🎉</div>
                        <p class="text-lg mb-6">Your account has been created!</p>
                        <button
                            class="btn btn-primary w-full"
                            onClick={() => navigate('/dashboard')}
                        >
                            Continue to Dashboard
                        </button>
                    </div>
                </Show>

                <div class="divider">OR</div>
                <div class="text-center">
                    <a href="/auth/login" class="link link-primary">
                        Already have an account? Login
                    </a>
                </div>
            </div>
        </div>
    );
}