// import { ensureNotAuthenticated } from '../api/auth/[...nextauth]/route';
import LoginForm from './component/loginform';
import BottomPattern from '@/public/images/login_bottom_pattern.png'
import Logo from '@/public/images/pryce_logo.png'
import Image from 'next/image';
import { ensureNotAuthenticated } from '../api/auth/[...nextauth]/utils';

const BackgroundGradient = 'bg-gradient-to-t from-slate-200 from-64% to-white-300 to-34%'

export default async function Login() {
    await ensureNotAuthenticated();

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
                <article className='z-10 sm:bg-white-300 p-8 sm:shadow-2xl sm:shadow-slate-300 rounded-2xl flex items-center flex-col'>
                    <h1 className='font-Rubik sm:text-[48px] text-[40px] font-bold tracking-tight text-center'>Welcome Back!</h1>
                    <p className='text-[15px] sm:text-[20px] max-w-[500px] text-center mt-3 mb-5'>Log in to manage your finances and make data-driven decisions with ease.</p>
                    <LoginForm />
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