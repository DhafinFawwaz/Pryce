import { getServerSession } from "next-auth";
import { authOptions, UserSession } from "./route";
import { redirect } from "next/navigation";

export async function getSessionAndEnsureAuthenticated(): Promise<UserSession | null>{
    const session: UserSession | null = await getServerSession(authOptions);
    if(!session) redirect('/login');
    return session;
}
  export async function ensureNotAuthenticated(){
    const session: UserSession | null = await getServerSession(authOptions);
    if(session) redirect('/dashboard');
}