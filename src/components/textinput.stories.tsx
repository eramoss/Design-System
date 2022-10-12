import { TextInput , TextInputRootprops} from "./textinput";
import {Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'


export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: 
            [
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder="Type your e-mail address" />
            ],    
    },

    argTypes:{
        children:{
            table:{
                disable: true
            }
        }
    }
} as Meta<TextInputRootprops>

export const Default: StoryObj<TextInputRootprops>= {}

export const WithoutIcon: StoryObj<TextInputRootprops>= {
    args: {
        children:<TextInput.Input placeholder="Type your e-mail address" />
    }
}
