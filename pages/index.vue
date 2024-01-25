<template>
  <div>
    <search />
    <ul class="tasks">
      <li
        class="task__item"
        v-for="task in filteredTasks"
        :key="task.id"
        @click="showModal(task)"
      >
        <div>
          <h4>{{ task.title }}</h4>
          <p>{{ task.selectedAction }}</p>
        </div>
        <p>{{ task.createdAt }}</p>
      </li>
    </ul>
    <modal
      v-if="isModalVisible"
      :task="selectedTask"
      @close="closeModal"
      @update-action="updateSelectedAction"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isModalVisible: false,
      selectedTask: null,
    };
  },
  computed: {
    ...mapState(["tasks", "searchValue"]),
    filteredTasks() {
      return this.tasks.filter((task) =>
        task.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
  methods: {
    ...mapMutations(["updateSelectedAction"]),
    showModal(task) {
      this.selectedTask = task;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedTask = null;
    },
  },
};
</script>

<style scoped>
.tasks {
  display: block;
  list-style: none;
  margin-top: 30px;
  padding: 0;
}
.task__item {
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.08);
  margin: 20px 0;
}
</style>
