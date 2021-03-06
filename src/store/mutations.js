export const TOGGLE_SIDEBAR = (state) => {
  state.sidebar_open = !(state.sidebar_open)
}

export const OPEN_SIDEBAR = (state) => {
  state.sidebar_open = true
}

export const CLOSE_SIDEBAR = (state) => {
  state.sidebar_open = false
}

export const SELECT_SIDEBAR = (state) => {
  state.sidebar_selected = true
}

export const UNSELECT_SIDEBAR = (state) => {
  state.sidebar_selected = false
}

export const TOGGLE_SIDEBAR_SELECTED = (state) => {
  state.sidebar_selected = !state.sidebar_selected
}
