import {clsx} from 'clsx'
import * as checkboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'

export interface Checkboxprops extends checkboxPrimitive.CheckboxProps{

}


export function Checkbox(props: Checkboxprops) {
    return(
        
        <checkboxPrimitive.Root className=
            'w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}>
                <checkboxPrimitive.Indicator asChild >
                    <Check weight='bold' className='h-5 w-5 text-cyan-500' />
                </checkboxPrimitive.Indicator>

        </checkboxPrimitive.Root>

    )}
