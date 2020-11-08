import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://test-task.shtrafovnet.com',
})

export const finesAPI = {
    getFine: async (ui: string) => {
        return instance.get(`/fines/` + ui)
        .then(res => {
            return res.data
        })
        .catch(err => {
            if(err.response.status === 404) return null
            if(err.response.status === 500) {
                console.log('Error', err.response)
                return null
            }
        })
    }
}