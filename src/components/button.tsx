import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface Buttonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}


export function Button({children , asChild , className, ...props} : Buttonprops) {

    const Comp = asChild? Slot : 'button' 

    return(
        <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300',
            className,)}
            {...props}
        >
            {children}
        </Comp>
    )
}