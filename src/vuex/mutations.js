// mutations里写函数怎样更改state
export const changeMenu = state => {
    state.menu_off = !state.menu_off

}
export const insideFun = state => {
    state.menu_off = !state.menu_off
    state.newList = false

}