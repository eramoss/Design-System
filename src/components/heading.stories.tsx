import { Heading , Headingprops} from "./heading";
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'lorem'

    },
} as Meta<Headingprops>

export const Default: StoryObj<Headingprops>= {}

export const Small: StoryObj<Headingprops> = {

    args: {
        size: 'sm'
    }

}

export const Large: StoryObj<Headingprops> = {

    args: {
        size: 'lg'
    }


}


export const CustomComponent: StoryObj<Headingprops> = {

    args: {
        asChild: true,
        children: (
            <h1>
                testando
            </h1>
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