export default {
    namespaced: true,
    state: {
        drawerStatus: false
    },
    mutations: {
        setDrawerStatus(state, status) {
            state.drawerStatus = status
        }
    },
}