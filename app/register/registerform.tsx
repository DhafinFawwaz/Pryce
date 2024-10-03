import {z} from 'zod'
import { Form } from "@/components/ui/form"
import BeatifullTextField from '@/app/component/beatifulltextfield'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Mail, KeyRound, UserRound } from 'lucide-react';
import Link from 'next/link';


const formSchema = z.object({
    username: z
        .string()
        .min(5, {message: "This field has to be filled"}),
    email: z
        .string()
        .min(1, {message: "This field has to be filled"})
        .email("This is not a valid email."),
    password: z
        .string()
        .min(1, {message: "This field has to be filled"}),
})

export default function RegisterForm(): JSX.Element {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // TODO: Authentication
    }

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <BeatifullTextField
            control={form.control}
            name='username'
            label='Username'
            placeholder='John Doe'
            Icon={UserRound}
            isError={form.formState.errors?.username ? true : false}
        />
        <BeatifullTextField
            control={form.control}
            name='email'
            label='Email'
            placeholder='johndoe@example.com'
            Icon={Mail}
            isError={form.formState.errors?.email ? true : false}
        />
        <BeatifullTextField
            control={form.control}
            name='password'
            label='Password'
            placeholder='••••••••'
            Icon={KeyRound}
            isError={form.formState.errors?.password ? true : false}
            isPassword
        />
        <Button type="submit" className='w-full rounded-[13px] bg-[#4361EE]'>Submit</Button>
        <p className='text-center'>Already have an account? <Link href='/login' prefetch className='font-Rubik font-medium pt-1 text-[#3A86FF] hover:text-purple-400'>Login</Link></p>
      </form>
    </Form>
    )
}