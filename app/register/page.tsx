"use client"

// import { ensureNotAuthenticated } from '../api/auth/[...nextauth]/route';
import RegisterForm from './registerform';
import BottomPattern from '@/public/images/login_bottom_pattern.png'
import Logo from '@/public/images/pryce_logo.png'
import Image from 'next/image';

const BackgroundGradient = 'bg-gradient-to-t from-slate-200 from-64% to-white-300 to-34%'

export default function Register() {
    // await ensureNotAuthenticated();

    return (
        <div className={`${BackgroundGradient} h-screen`}>
            <div className='flex flex-col items-center justify-center gap-10 h-full'>
                <Image 
                    src={Logo.src}
                    width={97}
                    height={35}
                    alt="Pryce Logo"
                    className="absolute top-8 left-9"
                />
                <article className='sm:bg-white-300 p-8 sm:shadow-2xl sm:shadow-slate-300 rounded-2xl flex items-center flex-col'>
                    <h1 className='font-Rubik sm:text-[48px] text-[40px] font-bold tracking-tight text-center'>Get Started Today!</h1>
                    <p className='text-[15px] sm:text-[20px] max-w-[500px] text-center mt-3 mb-5'>Join us and take the first step toward smarter, streamlined financial management.</p>
                    <RegisterForm />
                </article>
                <Image 
                    src={BottomPattern.src}
                    width={619}
                    height={702}
                    alt="Bottom Pattern"
                    className="absolute bottom-0"
                />
            </div>
        </div>
    );
}