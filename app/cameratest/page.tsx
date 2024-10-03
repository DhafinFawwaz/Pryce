import { getSessionAndEnsureAuthenticated } from '../api/auth/[...nextauth]/route';
import OCR from './ocr';


export default async function Page() {
    // const session = await getSessionAndEnsureAuthenticated();
    return <div className='bg-slate-300 h-screen w-screen'>
    <OCR></OCR>
</div>
}