import { createSignal } from 'solid-js'
import { useAuth } from '../../hooks/useAuth'

export default function LoginForm() {
    const { login, auth, error } = useAuth()
    const [email, setEmail] = createSignal('')
    const [password, setPassword] = createSignal('')
    const [message, setMessage] = createSignal('')

    const handleSubmit = async (e: Event) => {
        e.preventDefault()
        setMessage('')

        const result = await login(email(), password())

        if (result.success) {
            setMessage('Login successful!')
            // Redirect will happen automatically via auth state change
        }
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Login</h2>

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
                                'Login'
                            )}
                        </button>
                    </div>
                </form>

                <div class="divider">OR</div>

                <div class="text-center">
                    <a href="/auth/register" class="link link-primary">
                        Don't have an account? Register
                    </a>
                    <br />
                    <a href="/auth/forgot-password" class="link link-secondary">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    )
}