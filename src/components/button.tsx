import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';


export interface Buttonprops {
    children: ReactNode;
    asChild?: boolean;
}


export function Button({children , asChild}: Buttonprops) {

    const Comp = asChild? Slot : 'button' 

    return(
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300')}
        >
            {children}
        </Comp>
    )
}