import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';





export interface TextInputRootprops{
    children: ReactNode
}

export function TextINputRoot(props:TextInputRootprops) {
    return (
        <div className='flex items-center gap-3 py-4 h-12 px-3 bg-gray-800 rounded   w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}



export interface TextInputIconprops{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconprops) {
    return(
        <Slot className='w-6 h6 text-gray-400'  >
            {props.children}
        </Slot>
    )
}


TextInputIcon.displayName = 'TextInputIcon'



export interface TextInputInputprops extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

function TextInputInput(props: TextInputInputprops) {

    return(
            <input className=
                'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none '
                {...props}
            />
    )
}

export const TextInput = {
    Root:TextINputRoot,
    Input:TextInputInput,
    Icon:TextInputIcon,
}