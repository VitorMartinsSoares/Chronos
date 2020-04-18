import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    obj: {},
    items: [],
    user: {},
  },
  mutations: {
    resSchedule(state) {
      axios
        .get("http://localhost:3000/dataRecursos", {
          params: {
            data: state.obj.data,
            tipoRecurso: state.obj.tipoRecurso,
          }
        })
        .then(res => {
          state.items = res.data;
          state.items.forEach((e, index1) => {
            state.items[index1]["_cellVariants"] = {};
            Object.values(e).forEach((el, index2) => {
              let today = new Date();
              let date = new Date(state.obj.data.split("-").join("/"));
              if (date > today) {
                if (
                  el == 2 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "danger";
                } else if (
                  el == 1 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "warning";
                } else if (
                  el == 0 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "success";
                }
              } else {
                if (
                  el == 2 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "dark";
                } else if (
                  el == 1 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "secondary";
                } else if (
                  el == 0 &&
                  Object.keys(state.items[index1])[index2] !=
                  "idhorario"
                ) {
                  let col = String(
                    Object.keys(state.items[index1])[index2]
                  );
                  state.items[index1]["_cellVariants"][col] =
                    "light";
                }
              }
            });
          });
        });
    },
    setObj(state, obj) {
      state.obj.data = obj[0]
      state.obj.tipoRecurso = obj[1]
    },
    setUser(state, obj) {
      state.user = obj.payload;
      axios.defaults.headers.common['x-access-token'] = obj.token;
    }
  },
  actions: {
  },
  modules: {
  }
})
