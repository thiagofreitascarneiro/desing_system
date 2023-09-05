import { StoryObj, Meta } from "@storybook/react"
import  { Avatar, AvatarProps } from "@ignite-ui/react"

export default {
    title: 'Typography/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/thiagofreitascarneiro.png',
        alt: 'Thiago Carneiro'

    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {

}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
       src: undefined,
    },
}
