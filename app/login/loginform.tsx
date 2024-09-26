"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { LoadingSpinner } from "../component/LoadingSpinner";
import { useRouter } from "next/navigation";
export default function LoginForm(){
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        signIn('credentials',
            {
                email,
                password,
                callbackUrl: `${window.location.origin}/profile`,
                redirect: false
            }
        ).then(res => {
            if (res && res.ok) {
                router.push('/profile');
            } else {
                setIsLoading(false);
                setErrorMessage(getErrorMessage(res?.error));
                window.history.replaceState(null, "New Page Title", "/login") // reset url
            }
        })
    }

    function getErrorMessage(error: string|null|undefined): string{
        if(!error) return "Something went wrong. Please try again.";
        if(error === "CredentialsSignin") return "Invalid email or password.";
        return "Something went wrong. Please try again.";
    }

    return <>
<form onSubmit={onSubmit} className="space-y-2 md:space-y-4" action="#">
    <div className="grow">
        <label htmlFor="email">Your email</label>
        <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/user.svg?color=%2354565c" alt="" />
        <input type="email" name="email" id="email" placeholder="name@gmail.com" required/>
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/password.svg?color=%2354565c" alt="" />
        <input type="password" name="password" id="password" placeholder="••••••••" required/>
    </div>

    {isLoading ? 

        <button disabled type="submit" className="ease-out-back flex justify-center items-center">
            <LoadingSpinner></LoadingSpinner>
            <div className='ml-1'>Loging in...</div>
        </button>

    :
        <button type="submit" className="ease-out-back">Login</button>
    }
    
    <p className="text-red-500">{errorMessage}</p>
    <p className='my-0'>{`Don't have a registered device ? `}<Link href="/register">Register here.</Link></p>
</form>
    </>
}