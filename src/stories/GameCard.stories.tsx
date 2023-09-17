import type { StoryObj, Meta } from '@storybook/react'
import { GameCard } from '../components/GameCard'

export default {
  title: 'Components/Game Card',
  component: GameCard,
} as Meta<typeof GameCard>

export const Default: StoryObj<typeof GameCard> = {
  args: {
    id: '1',
    name: 'Red Dead Redemption',
    slug: 'red-dead-redemption',
    background_image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000058660/38c8a3d94f1c893b007ffbf5d07e6f235b7e66ab951ef00d8ef246168fc31637',
    genres: [
      {
        id: '1',
        name: 'Action',
      },
    ],
    platforms: [
      {
        platform: { id: '1', name: 'PC' },
      },
    ],
  },
}
