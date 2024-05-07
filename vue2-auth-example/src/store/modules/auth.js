import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode'

const state = {
    token: null,
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
};

const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await axios.post('http://localhost:3000/login', credentials);
            const token = response.data.accessToken;
            commit('setToken', token);
            localStorage.setItem('token', token);
        } catch (error) {
            throw Error('Invalid credentials');
        }
    },
    logout({ commit }) {
        commit('setToken', null);
        localStorage.removeItem('token');
    },
    async checkToken({ commit }) {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = VueJwtDecode.decode(token);
            const expirationTime = decoded.exp * 1000; // convert to milliseconds
            if (Date.now() < expirationTime) {
                commit('setToken', token);
                return true;
            }
        }
        return false;
    },
};

export default {
    state,
    mutations,
    actions,
};