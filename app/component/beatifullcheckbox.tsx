import { Control } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

type ComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    name: string;
    label: string;
}

export default function BeatifullCheckbox({control, name, label}: ComponentProps) {
    return (
        <FormField 
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-1">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className='size-[25px] border-2 border-slate-300 shadow-none focus-visible:ring-0 data-[state=checked]:bg-slate-500'
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className='text-md font-Rubik font-normal text-slate-600'>
                      {label}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
        />
    )
}