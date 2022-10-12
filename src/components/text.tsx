import {clsx} from 'clsx'
import { Children } from 'react';



export interface Textprops {
    size?: 'sm' | 'md' | 'lg'
    children: string;
}


export function Text({size = 'md',children}: Textprops) {
    return(
        <span className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }
            
        )}
        >
            {children}
        </span>
    )
}