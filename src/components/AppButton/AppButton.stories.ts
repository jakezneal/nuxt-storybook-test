import { Meta, StoryObj } from '@storybook/vue3';
import AppButton from './AppButton.vue';

const meta: Meta<typeof AppButton> = {
    component: AppButton,
    render: (args) => ({
        components: { AppButton },
        setup: () => ({ args }),
        template: `
            <AppButton />
        `,
    }),
}

export default meta;

type Story = StoryObj<typeof AppButton>

export const Default: Story = {};
