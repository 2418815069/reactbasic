// 保存数据
const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}
// 读取数据
const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
// 删除数据
const removeLocalStorage = (key) => {
  localStorage.removeItem(key)
}
export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
}