import { createLocalVue, mount } from '@vue/test-utils'
import YesNoPlugin from '../plugins/yesno'
import YesNo from '../components/YesNo.vue'
import { beforeEach, describe } from 'vitest'


// const $yesno = 'yes'


// describe('Yes no plugin', () => {
//     let localVue

//     beforeEach(() => {
//         localVue = createLocalVue()
//         localVue.use(YesNoPlugin)
//     })

//     it('should return a random answer', async () => {
//         axios.get.mockResolvedValueOnce({
//             data: { answer: 'yes' }
//         })
//         const answer = await localVue.prototype.$yesno.getAnswer()
//         expect(answer).toBe('yes')
//         expect(axios.get).toHaveBeenCalledTimes(1)
//         expect(axios.get).toHaveBeenCalledWith('https://yesno.wtf/api')
//     })
// })

// const localVue = createLocalVue()
// localVue.use(YesNoPlugin)

const mocks = {
    $yesno: {
        getAnswer: () => {
            return new Promise(resolve => resolve('yes'))
        }
    }
}

describe('YesNo component', () => {

    // let localVue

    // beforeEach(() => {
    //     localVue = createLocalVue()
    //     localVue.use(YesNoPlugin)
    // })

    it('displays the answer obtained from the API', async () => {
        const wrapper = mount(YesNo, {
            mocks: {
                $yesno: {
                    getAnswer: () => {
                        return new Promise(resolve => resolve('yes'))
                    }
                }
            }
        })
        // const answer = await wrapper.vm.$yesno.getAnswer()

        await wrapper.find('button').trigger('click')
        expect(wrapper.find('p').text()).toBe('yes')
    })


    // it('displays empty value on load', () => {
    //     const wrapper = mount(YesNo)
    //     expect(wrapper.find('p').text()).toBe('')
    // })


    // it('displays "yes" answer when the "Get Answer" button is clicked', async () => {
    //     await axios.get.mockResolvedValueOnce({
    //         data: { answer: 'yes' }
    //     })
    //     const answer = await localVue.prototype.$yesno.getAnswer()
    //     expect(answer).toBe('yes')
    //     const wrapper = mount(YesNo, { localVue })

    //     await wrapper.find('button').trigger('click')
    //     // await flushPromises()
    //     const p = await wrapper.text()
    //     console.log(p)
    //     expect(wrapper.find('p').text()).toBe('no')

    // })
    // let mockAxios

    // beforeEach(() => {
    //     mockAxios = new MockAdapter(axios)
    // })

    // afterEach(() => {
    //     mockAxios.restore()
    // })

    // it('displays a "yes" answer when the component is mounted', async () => {
    //     mockAxios.onGet('https://yesno.wtf/api').reply(200, 'yes')
    //     const wrapper = mount(YesNo)

    //     await wrapper.vm.$nextTick()
    //     console.log(wrapper.find('p').text())

    //     expect(wrapper.find('p').text()).toBe('yes')
    // })

    // it('displays a "no" answer when the "Get Answer" button is clicked', async () => {
    //     mockAxios.onGet('https://yesno.wtf/api').reply(200, { answer: 'yes' })
    //     const wrapper = mount(YesNo)

    //     await wrapper.vm.$nextTick()

    //     mockAxios.onGet('https://yesno.wtf/api').reply(200, { answer: 'no' })
    //     await wrapper.find('button').trigger('click')

    //     await wrapper.vm.$nextTick()

    //     expect(wrapper.find('p').text()).toBe('no')
    // })
})


// import { mount, createLocalVue } from '@vue/test-utils'
// import YesNoPlugin from '../plugins/yesno'
// import YesNo from '../components/YesNo.vue'

// const localVue = createLocalVue()
// localVue.use(YesNoPlugin)

// describe('YesNo', () => {
//     it('displays the answer obtained from the API', async () => {
//         const wrapper = mount(YesNo, { localVue })
//         const answer = await wrapper.vm.$yesno.getAnswer()

//         expect(wrapper.find('p').text()).toBe(answer)
//     })

//     it('displays a new answer when the button is clicked', async () => {
//         const wrapper = mount(YesNo, { localVue })
//         const firstAnswer = await wrapper.vm.$yesno.getAnswer()

//         await wrapper.find('button').trigger('click')
//         const secondAnswer = await wrapper.vm.$yesno.getAnswer()

//         expect(wrapper.find('p').text()).not.toBe(firstAnswer)
//         expect(wrapper.find('p').text()).toBe(secondAnswer)
//     })
// })