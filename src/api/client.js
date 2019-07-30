import axios from 'axios';
import {
  message
} from 'antd'
// import { getSnapshotData } from 'jest-snapshot/build/utils';

const getData = (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    let result;
    if (method === 'GET') {
      result = axios.get(url, {
        params: data
      })
    } else {
      result = axios.post(url, data)
    }
    // 2. 如果成功了, 调用resolve(value)
    result.then(response => {
      resolve(response.data)
      // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
    }).catch(error => {
      // reject(error)
      message.error('请求出错了: ' + error.message)
    })
  })
}
export default getData;