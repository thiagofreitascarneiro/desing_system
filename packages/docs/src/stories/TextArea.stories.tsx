import { StoryObj, Meta } from "@storybook/react"
import  { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react"

export default {
    title: 'Form/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box 
                    as='label' 
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size='sm'>Email address</Text>
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type your name',
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
       prefix: 'cal.com/' 
    }
}


