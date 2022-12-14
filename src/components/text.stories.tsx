import { Text , Textprops} from "./Text";
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'lorem'

    },
} as Meta<Textprops>

export const Default: StoryObj<Textprops>= {}

export const Small: StoryObj<Textprops> = {

    args: {
        size: 'sm'
    }

}

export const Large: StoryObj<Textprops> = {

    args: {
        size: 'lg'
    }


}


export const CustomComponent: StoryObj<Textprops> = {

    args: {
        asChild: true,
        children: (
            <p>
                testando
            </p>
        )
    },
    argTypes:{

        children:{
            table:{
                disable: true,
            },
        },
    }


}