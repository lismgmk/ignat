import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth',
})


export const requestsApi = {

    postTodolist(success: boolean) {
        const promise = instance.post<ResponseType>('/test', {success: success})
        return promise
    },
}

type ResponseType = {
    errorText: string,
    info: string,
    yourBody: {
        success: boolean
    },
    yourQuery: {}
}
