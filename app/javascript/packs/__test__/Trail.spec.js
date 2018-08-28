import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Trail from '../components/Trail'


describe('Trail.vue', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuetify)
  })

  it('renders the Trail component', () => {

    const wrapper = mount(Trail, { title: 'test', localVue });

    expect(wrapper.html()).toMatchSnapshot()

  })
})
