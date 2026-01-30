import axios from "axios"

export const BaseURL = 'http://localhost:8000'
const AxiosInstance =  axios.create({
    baseURL: BaseURL,
})
export default  AxiosInstance