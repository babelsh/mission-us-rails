import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from '../components/Dashboard.vue'
import Vuetify from 'vuetify'

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
