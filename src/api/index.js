import getData from './client';

const BASE = 'http://localhost:3000';
export const reqLogin = (username, password) => getData(BASE + '/login', {
  username,
  password
}, 'POST')

// 获取一级/二级分类的列表
export const reqCategorys = (parentId) => getData(BASE + '/manage/category/list', {
  parentId
})