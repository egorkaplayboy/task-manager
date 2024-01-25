<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__top">
        <h2 class="modal__title">{{ task.title }}</h2>
        <button @click="closeModal" class="modal__close-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
      </div>
      <p class="modal__desc">{{ task.desc }}</p>
      <div class="modal__top">
        <div class="modal__actions">
          <p
            v-for="action in task.actions"
            :key="action"
            @click="handleActionClick(action)"
            :class="[
              'modal__action',
              getActionClass(action),
              { selected: action === task.selectedAction },
            ]"
          >
            {{ action }}
          </p>
        </div>
        <div>
          <p>Исполнитель: {{ task.executor }}</p>
          <p>Создана: {{ task.createdAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleActionClick(selectedAction) {
      this.$emit("update-action", {
        taskId: this.task.id,
        selectedAction,
      });
    },
    getActionClass(action) {
      switch (action) {
        case "Готова к работе":
          return "ready";
        case "В работе":
          return "inProgress";
        case "Выполнена":
          return "completed";
        case "Отменена":
          return "canceled";
        case "Возвращена":
          return "returned";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background-color: white;
  min-width: 1000px;
  padding: 20px;
  border-radius: 10px;
}

.modal__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal__close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}
.modal__close-button:hover {
  transform: rotate(180deg);
}

.modal__close-button svg {
  fill: black;
}

.modal__desc {
  margin-bottom: 20px;
  line-height: 1.5;
}

.modal__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__actions {
  display: flex;
  align-items: center;
}

.modal__action {
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 20px;
}

.modal__action.ready {
  background-color: lightgreen;
}

.modal__action.inProgress {
  background-color: lightblue;
}

.modal__action.completed {
  background-color: lightcoral;
}

.modal__action.canceled {
  background-color: lightgrey;
}

.modal__action.returned {
  background-color: lightsalmon;
}

.modal__action.selected {
  border: 2px solid black;
}
</style>
