import { createSignal } from 'solid-js'
import { useAuth } from '../../hooks/useAuth'

export default function RegisterForm() {
    const { register, auth, error } = useAuth()
    const [email, setEmail] = createSignal('')
    const [password, setPassword] = createSignal('')
    const [confirmPassword, setConfirmPassword] = createSignal('')
    const [message, setMessage] = createSignal('')

    const handleSubmit = async (e: Event) => {
        e.preventDefault()
        setMessage('')

        const result = await register(email(), password(), confirmPassword())

        if (result.success) {
            setMessage(result.message || 'Registration successful!')
        }
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            class="input input-bordered"
                            value={email()}
                            onInput={(e) => setEmail(e.currentTarget.value)}
                            required
                        />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            class="input input-bordered"
                            value={password()}
                            onInput={(e) => setPassword(e.currentTarget.value)}
                            required
                        />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            class="input input-bordered"
                            value={confirmPassword()}
                            onInput={(e) => setConfirmPassword(e.currentTarget.value)}
                            required
                        />
                    </div>

                    {error() && (
                        <div class="alert alert-error">
                            <span>{error()}</span>
                        </div>
                    )}

                    {message() && (
                        <div class="alert alert-success">
                            <span>{message()}</span>
                        </div>
                    )}

                    <div class="form-control mt-6">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            disabled={auth().loading}
                        >
                            {auth().loading ? (
                                <span class="loading loading-spinner"></span>
                            ) : (
                                'Register'
                            )}
                        </button>
                    </div>
                </form>

                <div class="divider">OR</div>

                <div class="text-center">
                    <a href="/auth/login" class="link link-primary">
                        Already have an account? Login
                    </a>
                </div>
            </div>
        </div>
    )
}