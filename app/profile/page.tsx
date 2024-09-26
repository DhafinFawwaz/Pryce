import { getSessionAndEnsureAuthenticated } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from './logoutbutton';
import { labelStyle, dataStyle } from "../style/style";
 
export default async function Profile() {
    const session = await getSessionAndEnsureAuthenticated();

    return (
<section className="bg-night-50 dark:bg-night-900 h-screen justify-center">
    <div className="flex flex-col items-center justify-center p-5 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-night-800 dark:border-night-700">
            <div className="p-4 space-y-3 md:space-y-3 sm:p-8">

                
                <div className='flex flex-row justify-between'>
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-night-900 md:text-3xl dark:text-white">
                        Profile
                    </h1>
                    <button className='p-2 rounded-lg bg-night-600 hover:bg-night-700 focus:ring-2 focus:outline-none focus:ring-night-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"/><path fill="currentColor" d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"/></svg>
                    </button>
                </div>
                <div>
                    <h3 className={labelStyle}>Username</h3>
                    <h3 className={"font-bold text-base"}>{session!.data.username}</h3>
                </div>
                <div>
                    <h3 className={labelStyle}>NIM</h3>
                    <h3 className={"font-bold text-base"}>{session!.data.nim}</h3>
                </div>
                <div>
                    <h3 className={labelStyle}>Email</h3>
                    <h3 className={"font-bold text-base"}>{session!.data.email}</h3>
                </div>

                <LogoutButton></LogoutButton>
                
                
            </div>
        </div>
    </div>
</section>
    );
}