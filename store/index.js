export const state = () => ({
  breadcrumbs: [],
})

export const getters = {
  getBreadcrumbs(state) {
    return state.breadcrumbs
  }
}

export const mutations = {
  addBreadcrumbs(state, data) {
    state.breadcrumbs = data
  }
}

export const actions = {
  addBreadcrumbs(vuexContext, content) {
    return vuexContext.commit('addBreadcrumbs', content)
  }
}
