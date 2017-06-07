// mutations里写函数怎样更改state
export const increment = state => {
    state.count = state.count + 1

}
export const decrement = state => {
    state.count = state.count - 1

}