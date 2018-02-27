export const TOGGLE_SIDEBAR = (state) => {
  state.sidebar_open = !(state.sidebar_open)
}

export const OPEN_SIDEBAR = (state) => {
  state.sidebar_open = true
}

export const CLOSE_SIDEBAR = (state) => {
  state.sidebar_open = false
}
