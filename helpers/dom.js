export const getCurretReftHeight = element => {
  const { current } =  element || {}
  return  (current ? current.getBoundingClientRect().height : 0)
}
