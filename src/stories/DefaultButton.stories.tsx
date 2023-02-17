import type { Meta, StoryObj } from '@storybook/react';
import DefaultButton from './DefaultButton';

const meta: Meta<typeof DefaultButton> = {
  title: 'Example/DefaultButton',
  component: DefaultButton,
}

export default meta;
type Story = StoryObj<typeof DefaultButton>;

export const ADefaultExport: Story = {
  args: {
    label: "clicky",
  }
}
