export const state = () => ({
  tasks: [
    {
      id: 1,
      title: "Добавить авторизацию",
      desc: "Добавить авторизацию на nest, postgresql",
      createdAt: "12.12.12",
      executor: "Егор Белов",
      selectedAction: "Готова к работе",
      actions: [
        "Готова к работе",
        "В работе",
        "Выполнена",
        "Отменена",
        "Возвращена",
      ],
    },
    {
      id: 2,
      title: "Добавить регистрацию",
      desc: "Добавить регистрацию на nest, postgresql",
      createdAt: "11.11.11",
      executor: "Егор Белов",
      selectedAction: "Готова к работе",
      actions: [
        "Готова к работе",
        "В работе",
        "Выполнена",
        "Отменена",
        "Возвращена",
      ],
    },
  ],
  searchValue: ""
});
export const mutations = {
  updateSelectedAction(state, { taskId, selectedAction }) {
    const task = state.tasks.find((task) => task.id === taskId);
    if (task) {
      task.selectedAction = selectedAction;
    }
  },
  setSearchValue(state, value) {
    state.searchValue = value
  }
};
