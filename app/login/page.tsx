"use client"

// import { ensureNotAuthenticated } from '../api/auth/[...nextauth]/route';
import LoginForm from './component/loginform';

const BackgroundGradient = 'bg-gradient-to-t from-slate-200 from-64% to-white-300 to-34%'

export default function Login() {
    // await ensureNotAuthenticated();

    return (
        <div className={`${BackgroundGradient} h-screen flex flex-col items-center gap-10`}>
            <div>
                <h1 className='font-Rubik text-[48px] font-bold tracking-tight text-center'>Welcome Back!</h1>
                <p className='text-[20px] max-w-[500px] text-center mt-3'>Log in to manage your finances and make data-driven decisions with ease.</p>
            </div>
            <LoginForm />
        </div>
    );
}