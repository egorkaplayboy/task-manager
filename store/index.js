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
    {
      id: 3,
      title: "Тест",
      desc: "Тест",
      createdAt: "10.10.10",
      executor: "Вася Пупкин",
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
  sortedTasks: [],
});
export const getters = {
  getFilters: (state) => (filter) => {
    switch (filter.type) {
      case "byExecutor":
        return Array.from(new Set(state.tasks.map((task) => task.executor)));
      case "byAction":
        return Array.from(
          new Set(state.tasks.map((task) => task.selectedAction))
        );
      default:
        return [];
    }
  },
};

export const mutations = {
  resetSort(state) {
    state.sortedTasks = state.tasks;
  },
  updateSelectedAction(state, { taskId, selectedAction }) {
    const task = state.tasks.find((task) => task.id === taskId);
    if (task) {
      task.selectedAction = selectedAction;
    }
  },
  sortTasks(state, { currentFilter, filter }) {
    switch (currentFilter.type) {
      case "byExecutor":
        state.sortedTasks = state.tasks.filter(
          (task) => task.executor === filter
        );
        break;
      case "byAction":
        state.sortedTasks = state.tasks.filter(
          (task) => task.selectedAction === filter
        );
        break;
      default:
        state.tasks = [];
        break;
    }
  },
};
