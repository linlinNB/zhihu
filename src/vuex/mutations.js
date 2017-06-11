// mutations里写函数怎样更改state
export const changeMenu = state => {
    state.menu_off = !state.menu_off

}
export const insideFun = (state,themId) => {
    state.menu_off = !state.menu_off
    state.newList = false
    state.newListId = themId
    // console.log(state)
    // console.log(themId)
}
export const indexChangeTrue = state => {
    state.newList = true
}
export const goNewdetails = (state,newsId) => {
    state.homeNewId = newsId
}
