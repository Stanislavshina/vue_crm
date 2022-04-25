import testComponent from "../components/testComponent";
import { mount } from "@vue/test-utils";

describe("testComponent", ()=>{
   test('Testing props',()=>{
      const wrapper = mount(testComponent, {
         propsData: {
            message: "Hellow World!"
         }
      })
      expect(wrapper.text()).toContain("!")
   })
})