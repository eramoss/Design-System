import { Button , Buttonprops} from "./button";
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'components/button',
    component: Button,
    args: {
        children: 'Create account'

    },
    argTypes:{}
} as Meta<Buttonprops>

export const Default: StoryObj<Buttonprops>= {}

