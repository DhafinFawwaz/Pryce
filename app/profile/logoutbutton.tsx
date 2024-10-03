"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LogoutButton(){
    const router = useRouter();
    function onLogout(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        signOut({
            callbackUrl: `/login`,
            redirect: false
        }).then(() => {
            router.replace('/login');
        })
    }

    return <>
<button onClick={onLogout} type="submit" className="w-full text-white font-bold bg-night-600 hover:bg-night-700 focus:ring-4 focus:outline-none focus:ring-night-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-night-600 dark:hover:bg-night-700 dark:focus:ring-night-900">
    Logout
</button>
    </>
}