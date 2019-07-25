import axios from 'axios';
// import { getSnapshotData } from 'jest-snapshot/build/utils';

const getData = (url, data = {}, method = 'get') => {
  let result;
  if (method === 'get') {
    result = axios.get(url, {
      params: data
    })
  } else {
    result = axios.post(url, data)
  }
  // 2. 如果成功了, 调用resolve(value)
  result.then(response => {
    console.log(response.data)
    // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
  }).catch(error => {
    // reject(error)
    console.log(error);
    // result.error('请求出错了: ' + error.message)
  })
  return result;

}
export default getData;