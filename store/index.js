export const state = () => ({
    menData: [],
    womenData: [],
    jeweleryData: [],
    eletData: [],
});

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },

    loggedInUser(state) {
        return state.auth.user;
    },
};

export const mutations = {
    MEN(state, data) {
        state.menData = data;
    },
    WOMEN(state, data) {
        state.womenData = data;
    },
    JEWELERY(state, data) {
        state.jeweleryData = data;
    },
    ELECTRONICTS(state, data) {
        state.eletData = data;
    },
};

const url = 'https://fakestoreapi.com/'
export const actions = {
    async fetchMenProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/men's clothing");
        commit('MEN', data);
    },
    async fetchWomenProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/women's clothing?limit=4");
        commit('WOMEN', data);
    },
    async fetchJeweleryProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/jewelery");
        commit('JEWELERY', data);
    },
    async fetchElectronictsProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/electronics?limit=4");
        commit('ELECTRONICTS', data);
    },
};
