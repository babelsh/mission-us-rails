import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Dashboard from '../components/Dashboard'


describe('Dashboard.vue', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuetify)
  })

  it('renders the Dashboard component', () => {

    const wrapper = shallowMount(Dashboard, { localVue })

    expect(wrapper).toMatchSnapshot()

  })
})
