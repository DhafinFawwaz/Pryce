import {z} from 'zod'
import { Form } from "@/components/ui/form"
import BeatifullTextField from './beatifulltextfield'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Mail, KeyRound } from 'lucide-react';
import BeatifullCheckbox from './beatifullcheckbox';
import Link from 'next/link';


const formSchema = z.object({
    email: z
        .string()
        .min(1, {message: "This field has to be filled"})
        .email("This is not a valid email."),
    password: z
        .string()
        .min(1, {message: "This field has to be filled"}),
    remember: z
        .boolean()
})

export default function LoginForm(): JSX.Element {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          remember: false
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-[30rem]">
        <BeatifullTextField
            control={form.control}
            name='email'
            label='Email'
            placeholder='johndoe@example.com'
            Icon={Mail}
        />
        <BeatifullTextField
            control={form.control}
            name='password'
            label='Password'
            placeholder='••••••••'
            Icon={KeyRound}
            isPassword
        />
        <div className='flex flex-row justify-between items-center'>
            <BeatifullCheckbox 
                control={form.control}
                name='remember'
                label='Remember me'
            />
            <Link href='#' className='font-Rubik font-medium pt-1 text-[#3A86FF]'>Forgot Password</Link>
        </div>
        <Button type="submit" className='w-full rounded-[13px] bg-[#4361EE]'>Submit</Button>
        <p className='text-center'>Don&apos;t have an account? <Link href='#' className='font-Rubik font-medium pt-1 text-[#3A86FF]'>Register</Link></p>
      </form>
    </Form>
    )
}