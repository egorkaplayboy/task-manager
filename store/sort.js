export const state = () => ({
  searchValue: "",
  filters: [
    { label: "По исполнителю", type: "byExecutor" },
    { label: "По статусу", type: "byAction" },
  ],
});
export const mutations = {
  setSearchValue(state, value) {
    state.searchValue = value;
  },
};
