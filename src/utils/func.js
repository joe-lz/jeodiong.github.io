const SetLocal = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}
const GetLocal = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

export default {
  SetLocal,
  GetLocal
}
