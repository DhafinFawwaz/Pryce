import { getSessionAndEnsureAuthenticated } from '../api/auth/[...nextauth]/utils';
import OCR from './ocr';


export default async function Page() {
    const session = await getSessionAndEnsureAuthenticated();
    return <div className='bg-slate-200 h-screen w-screen flex justify-center'>
    <div className='bg-slate-50 p-4 flex justify-center items-center'>
    <OCR></OCR>
    </div>
</div>
}