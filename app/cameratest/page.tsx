import { getSessionAndEnsureAuthenticated } from '../api/auth/[...nextauth]/route';
import OCR from './ocr';


export default async function Page() {
    // const session = await getSessionAndEnsureAuthenticated();
    function onFormConfirm() {

    }
    return <div className='bg-slate-300 h-screen w-screen'>
    <OCR onConfirm={onFormConfirm}></OCR>
</div>
}