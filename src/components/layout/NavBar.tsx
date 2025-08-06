import { createSignal, createEffect, Show, For } from "solid-js";
import { useStore } from "@nanostores/solid";
import { profileStore } from "../../stores/profile";
import { authStore } from "../../stores/auth";
import type { AuthStoreState } from "../../types";

const menuItems = [
    { title: "program", link: "/program", submenu: [] },
    { title: "network", link: "/network", submenu: [] },
    {
        title: "resources",
        link: "/resources",
        submenu: [
            { title: "templates", link: "/resources?type=templates" },
            { title: "blog", link: "/resources?type=blog" },
            { title: "guides", link: "/resources?type=guides" },
            { title: "stories", link: "/resources?type=guides" }
        ]
    },
    { title: "events", link: "/events", submenu: [] }
];

export default function Navbar() {
    const $auth = useStore(authStore);
    const $profile = useStore(profileStore);
    const [auth, setAuth] = createSignal<AuthStoreState | null>(null);

    createEffect(() => {
        if ($auth()) {
            setAuth($auth());
        }
    });

    return (
        <div class="navbar bg-base-100 shadow-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    {/* Mobile menu button */}
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile menu */}
                    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <For each={menuItems}>
                            {(item) => (
                                <li>
                                    <Show
                                        when={item.submenu.length > 0}
                                        fallback={<a href={item.link}>{item.title}</a>}
                                    >
                                        <details>
                                            <summary>{item.title}</summary>
                                            <ul>
                                                <For each={item.submenu}>
                                                    {(subItem) => (
                                                        <li><a href={subItem.link}>{subItem.title}</a></li>
                                                    )}
                                                </For>
                                            </ul>
                                        </details>
                                    </Show>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
                <a href="/" class="btn btn-ghost text-xl">Your Logo</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                {/* Desktop menu */}
                <ul class="menu menu-horizontal px-1">
                    <For each={menuItems}>
                        {(item) => (
                            <li>
                                <Show
                                    when={item.submenu.length > 0}
                                    fallback={<a href={item.link}>{item.title}</a>}
                                >
                                    <details>
                                        <summary>{item.title}</summary>
                                        <ul class="p-2 bg-base-100 z-[1]">
                                            <For each={item.submenu}>
                                                {(subItem) => (
                                                    <li class="capitalize"><a href={subItem.link}>{subItem.title}</a></li>
                                                )}
                                            </For>
                                        </ul>
                                    </details>
                                </Show>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <div class="navbar-end">
                <Show
                    when={auth()}
                    fallback={
                        <a class="btn btn-primary" href="/login">Login</a>
                    }
                >
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <Show when={$profile()}>
                                    <img alt="Profile" src={$profile()?.profile_picture!} />
                                </Show>
                            </div>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/settings">Settings</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </Show>
            </div>
        </div>
    );
}