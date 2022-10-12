import { Checkbox , Checkboxprops} from "./checkbox";
import {Meta, StoryObj} from '@storybook/react'
import { Text } from "./Text";


export default {
    title: 'components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes:{},
    decorators: [
        (Story) => {
            return(
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias </Text>
                </div>
            )
        }
    ],
} as Meta<Checkboxprops>

export const Default: StoryObj<Checkboxprops>= {}

