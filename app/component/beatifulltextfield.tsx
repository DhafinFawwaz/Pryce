import React from "react";
import { Control } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";

type ComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    name: string;
    label: string;
    placeholder: string;
    Icon: React.ComponentType<{ className?: string }>;
    isPassword?: boolean;
    isError?: boolean;
}

export default function BeatifullTextField ({ control, name, label, placeholder, Icon, isPassword = false, isError = false }: ComponentProps) : JSX.Element {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                <FormLabel className='font-Rubik font-semibold text-slate-800 sm:text-lg sm:text-md'>{label}</FormLabel>
                <div className={`flex flex-row items-center border-2 ${isError? `border-red-400`: `border-slate-300`} pl-3 rounded-lg`}>
                    <Icon className='text-slate-500' />
                        {!isPassword && (
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    className="focus-visible:ring-0 border-none shadow-none pl-2 sm:pb-1 font-Rubik font-bold sm:text-[15px] text-slate-700 placeholder:text-slate-500"
                                    {...field}
                                />
                            </FormControl>
                        )}
                        {isPassword && (
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    className="focus-visible:ring-0 border-none shadow-none pl-2 sm:pb-1 font-Rubik font-bold sm:text-[15px] text-slate-700 placeholder:text-slate-500"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                        )}
                </div>
                <FormMessage />
                </FormItem>
            )}
        />
    );
}