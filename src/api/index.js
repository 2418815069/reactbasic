import getData from './client';

const BASE = '';
export const reqLogin = (username, password) => getData(BASE + '/login', {
  username,
  password
}, 'POST')
export const reqCategoryList = (parentId) => getData(BASE + '/category/list', {
  parentId
}, 'GET')
export const reqCategoryAdd = (parentId, categoryName) => getData(BASE + '/category/add', {
  parentId,
  categoryName
}, 'POST')
export const reqCategoryUpdate = (parentId, categoryName) => getData(BASE + '/category/update', {
  parentId,
  categoryName
}, 'POST')
// 获取一级/二级分类的列表
export const reqCategorys = (parentId) => getData(BASE + '/manage/category/list', {
  parentId
})