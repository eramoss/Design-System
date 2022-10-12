import { Text , Textprops} from "./text";
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'lorem'
    }
    
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