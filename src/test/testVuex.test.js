import testVuex from "./testVuex.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import { expect } from "@jest/globals";


const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test store', ()=>{
  let actions
  let store

  beforeEach(()=>{
    actions = {
      addData: jest.fn()
    }

    store = new Vuex.Store({
      actions,
      state: {
        data: ''
      }
    })
  })
  
  it('Test Actions', ()=>{
    const wrapper = shallowMount(testVuex,{
      store, localVue
    })

    const input = wrapper.find('input') 
    
    input.setValue('test')
    expect(wrapper.vm.value).toBe('test')

    const btn = wrapper.find('button')
    btn.trigger('click')

    expect(wrapper.vm.value).toBe('test')
    expect(actions.addData).toHaveBeenCalled()

  })
})