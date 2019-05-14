import { shallowMount } from '@vue/test-utils'
import ListView from '@/components/ListView.vue'
import Vue from 'vue'

Vue.config.ignoredElements = [
    'b-button', 'b-dropdown', 'b-dropdown-item', 'b-dropdown-divider', 'b-list-group', 'b-form', 'b-input', 'b-input-group'
];

describe('ListView.vue', () => {
    it('isHover to default to true on load', () => {
        const wrapper = shallowMount(ListView)
        expect(wrapper.vm.isHovered).toBe(true)
    })

    it('check if add button shows book add form', () => {
        const wrapper = shallowMount(ListView);
        wrapper.find('.addButton').trigger('click');
        expect(wrapper.vm.newBookForm).toBeTruthy();
    })

    it('shuffledBooks should be an empty array onload', () => {
        const wrapper = shallowMount(ListView, {})
        expect(wrapper.vm.shuffledBooks).toHaveLength(0)
    })


})
