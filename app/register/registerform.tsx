"use client"
import Link from 'next/link';
import { useState } from 'react';
import { LoadingSpinner } from '../component/LoadingSpinner';
import { useRouter } from 'next/navigation';

export function RegisterForm() {

    const [errorState, setErrorState] = useState<{message: string, success: boolean}>({message: "", success: false});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();    

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/register/', {
            method: 'POST',
            body: formData
        });

        if(!res.ok){
            setIsLoading(false);
            const data = await res.json();
            setErrorState({
                message: data.message,
                success: false
            });
            return;
        }
        setIsLoading(false);
        setErrorState({
            message: "Register success. Please login.",
            success: true
        });
        // router.push('/login');
    }

    function getErrorMessage(error: string|null|undefined): string{
        if(!error) return "Something went wrong. Please try again.";
        if(error === "CredentialsSignin") return "Invalid email or password.";
        return "Something went wrong. Please try again.";
    }

    return <>
<form onSubmit={onSubmit} className="space-y-2 md:space-y-4" action="#">
    <div className="grid grid-cols-2 gap-2">
        <div className="grow">
            <label htmlFor="username">Username</label>
            <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/user.svg?color=%2354565c" alt="" />
            <input type="text" name="username" id="username" placeholder="Chicken Mountain" required/>
        </div>
        <div>
            <label htmlFor="nim">NIM</label>
            <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/email.svg?color=%2354565c" alt="" />
            <input type="text" name="nim" id="nim" placeholder="13522180" required/>
        </div>
    </div>


    <div className="grow">
        <label htmlFor="email">Your email</label>
        <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/email.svg?color=%2354565c" alt="" />
        <input type="email" name="email" id="email" placeholder="name@gmail.com" required/>
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <img className="absolute z-10 m-4" src="https://api.iconify.design/mdi/password.svg?color=%2354565c" alt="" />
        <input type="password" name="password" id="password" placeholder="••••••••" required/>
    </div>
    <div></div>

    {isLoading ? 

        <button disabled type="submit" className="ease-out-back flex justify-center items-center">
            <LoadingSpinner></LoadingSpinner>
            <div className='ml-1'>Registering...</div>
        </button>
    :
        <button type="submit" className="ease-out-back">Register</button>
    }
    
    
    <p className={`${errorState.success ? "text-green-500" : "text-red-500"}`}>{errorState.message}</p>
    <p className='my-0'>Already have a registered device ? <Link href="/login">Login here.</Link></p>
</form>
    </>
}