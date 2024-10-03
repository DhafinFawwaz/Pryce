import { ensureNotAuthenticated } from '../api/auth/[...nextauth]/route';
import { RegisterForm } from "./registerform";

export default async function Register() {
    await ensureNotAuthenticated();

    return (
<section className="bg-night-900 h-screen justify-center">
    <div className="flex flex-col items-center justify-center p-5 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 bg-night-800 rounded-2xl p-2">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                    Register
                </h1>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    </div>
</section>
);
}