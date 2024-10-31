import axios from "axios";
import { TIME_OUT, BASE_URL } from "./config"
class MyRequest {
    constructor(baseURL, timeout = 1000) {
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: timeout,
        })
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.instance.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.instance.request({ ...config, method: 'post' })
    }
}

export default new MyRequest(BASE_URL, TIME_OUT)