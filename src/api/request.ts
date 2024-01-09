import axios from 'axios'

const instance = axios.create({

})


instance.interceptors.response.use((response) => {

    console.log('axios中间件', response)

    if (response.status === 200) {

        if (response.data.code === 401) {
            // 将页面直接跳转到  /login
            // window.location.href = '/login'

            return Promise.reject('没有登录状态')
        }
    } else {
    }
    return response;
}, (error) => {
    console.log('发生错误',error)
    return Promise.reject(error);
});




/**
 * AxiosResponse 是 Axios HTTP 响应结构的接口
 */
export interface AxiosResponse<T = ResData> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: Object;
    request?: any;
}
/**
 * ResData 定义 AxiosResponse 返回的 data 数据类型
 */
export type ResData<T = any> = {
    code: number,
    msg: string,
    data: T,
}

export default instance