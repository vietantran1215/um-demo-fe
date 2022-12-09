export default {
  createUser(state, user) {
    const users = [...state.getters.getUsers, user];
    state.commit("setUsers", users);
  },
};
