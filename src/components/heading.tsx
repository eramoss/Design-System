import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface Headingprops {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode;
    asChild?: boolean;
}


export function Heading({size = 'md',children , asChild}: Headingprops) {

    const Comp = asChild? Slot : 'h2' 

    return(
        <Comp className={clsx(
            'font-bold text-gray-100 font-sans',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }
            
        )}
        >
            {children}
        </Comp>
    )
}