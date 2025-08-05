import { createSignal, createEffect, Show, For } from "solid-js";
import { useStore } from "@nanostores/solid";
import { profileStore } from "../../stores/profile";
import { authStore } from "../../stores/auth";
import type { AuthStoreState } from "../../types";

export default function Navbar() {
    const $auth = useStore(authStore);
    const [auth, setAuth] = createSignal<AuthStoreState | null>(null);

    createEffect(() => {
        if ($auth()) {
            setAuth($auth());
        }
    })

}