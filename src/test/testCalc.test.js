import { mount } from "@vue/test-utils";
import calc from "../components/Calc.vue";

describe('test calc', ()=>{
   it('test first operand', ()=>{
      const wrapper = mount(calc);
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('1')
      expect(wrapper.vm.operand1).toBe(1)
   })
   it('test second operand', ()=>{
      const wrapper = mount(calc);
      const operand2 = wrapper.find('input[name=operand2]')
      // operand2.setValue('3')
      operand2.element.value = "3"
      operand2.trigger('input')
      expect(wrapper.vm.operand2).toBe(3)
   })
   it('test sum',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('1')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('3')
      const sumBtn = wrapper.find('button[name="+"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(4)
   })
   it('test sub',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('1')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('3')
      const sumBtn = wrapper.find('button[name="-"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(-2)
   })
   it('test dev',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('4')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('2')
      const sumBtn = wrapper.find('button[name="/"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(2)
   })
   it('test error /0',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('4')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('0')
      const sumBtn = wrapper.find('button[name="/"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.error).toEqual('на ноль делить нельзя')
   })
   it('test multi',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('4')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('2')
      const sumBtn = wrapper.find('button[name="*"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(8)
   })
   it('test exponent',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('4')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('2')
      const sumBtn = wrapper.find('button[name="^"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(16)
   })
   it('test percent',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('20')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('11')
      const sumBtn = wrapper.find('button[name="%"]')
      sumBtn.trigger('click')
      expect(wrapper.vm.result).toBe(9)
   })
   it('test visible menu', ()=>{
      const wrapper = mount(calc)
      const inpShow = wrapper.find('input[name=show]')
      inpShow.trigger('click')
      expect(wrapper.vm.show).toEqual(true)
   })
   it('test radioBtn1',()=>{
      const wrapper = mount(calc)
      const radio1 = wrapper.find('input[name=ops1]')
      radio1.setChecked()
      const numBtn = wrapper.find('button[name="1"]')
      numBtn.trigger('click')
      expect(wrapper.vm.operand1).toBe(1)
   })
   it('test radioBtn2',()=>{
      const wrapper = mount(calc)
      const radio2 = wrapper.find('input[name=ops2]')
      radio2.setChecked()
      const numBtn = wrapper.find('button[name="9"]')
      numBtn.trigger('click')
      expect(wrapper.vm.operand2).toBe(9)
   })
   it('test radioBtn2',()=>{
      const wrapper = mount(calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('250')
      const delBtn = wrapper.find('button[name=delLast]')
      delBtn.trigger('click')
      expect(wrapper.vm.operand1).toBe(25)
   })
})