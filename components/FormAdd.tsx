"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
const formSchema = z.object({
    people: z.string(),
    category: z.string(),
    status: z.string(),
    description: z.string(),
    amount: z.string(),
    date: z.string(),
    isProject: z.string(),
})

interface FormAddProps {
    onCancel: () => void
}
export default function FormAdd({onCancel} : FormAddProps){
    const [date, setDate] = useState<Date>()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            people: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField 
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Person</FormLabel>
                            <FormControl>
                            <Select>
                                <SelectTrigger className="w-full" {...field}>
                                    <SelectValue placeholder="Select person" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <div className="flex flex-row gap-2">
                    <FormField 
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Category</FormLabel>
                                <FormControl>
                                <Select>
                                    <SelectTrigger className="w-[180px]" {...field}>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Status</FormLabel>
                                <FormControl>
                                <Select>
                                    <SelectTrigger className="w-[180px]" {...field}>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Income">Income</SelectItem>
                                            <SelectItem value="Expense">Expense</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField 
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Description</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. I very hungry" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. 10000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-gray-900 font-RubikSemiBold text-[18px]">Date</FormLabel>
                            <FormControl>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    {...field}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    />
                                </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-row gap-4">
                    <button 
                        className="w-1/2 bg-white-100 text-purple-600 font-RubikBold text-[20px] border-[2px] border-gray-300 rounded-[8px] py-3" 
                        type="reset" 
                        onClick={() => onCancel()}
                        >
                        CANCEL
                    </button>
                    <button 
                        className="w-1/2 bg-purple-600 text-white-100 font-RubikBold text-[20px] rounded-[8px] py-3"
                        type="submit"
                    >
                        SEND
                    </button>
                </div>
            </form>
        </Form>
    )
}