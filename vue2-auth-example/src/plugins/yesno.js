import axios from 'axios'

export const yesno = {}


yesno.getAnswer = async function () {
    return await axios.get('https://yesno.wtf/api').then(response => response.data.answer)
}

const YesNoPlugin = {
    install(Vue) {
        Vue.prototype.$yesno = yesno
    }
}

export default YesNoPlugin