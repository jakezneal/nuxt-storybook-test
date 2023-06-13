import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppButton from './AppButton.vue';

describe('AppButton', () => {
    test('it renders', () => {
        const wrapper = mount(AppButton);

        expect(wrapper.text)
            .toContain('Test component');
    });
});
