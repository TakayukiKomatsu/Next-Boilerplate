import { Story, Meta } from '@storybook/react/types-6-0'
import {} from '@storybook/addon-controls'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: Story = () => <Button />
