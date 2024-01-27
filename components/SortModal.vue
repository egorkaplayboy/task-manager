<template>
  <div class="sortModal">
    <div class="sortModal__content">
      <div class="sortModal__currentFilter">
        <h2>{{ currentFilter.label }}</h2>
        <button @click="closeModal" class="sortModal__close-button">
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
      <div v-for="(filter, index) in getFilters(currentFilter)" :key="index">
        <p
          class="sortModal__filter-item"
          @click="sortedTasks(currentFilter, filter)"
        >
          {{ filter }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    currentFilter: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getFilters"]),
  },
  methods: {
    ...mapMutations(["sortTasks"]),
    sortedTasks(currentFilter, filter) {
      this.sortTasks({ currentFilter, filter });
      const { query } = this.$route;
      this.$router.push({ query: { ...query, filter } });
    },
    closeModal() {
      this.$emit("closeSortModal");
    },
  },
};
</script>
<style>
.sortModal {
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
.sortModal__content {
  background-color: white;
  min-width: 1000px;
  padding: 20px;
  border-radius: 10px;
}
.sortModal__close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}
.sortModal__close-button:hover {
  transform: rotate(180deg);
}
.sortModal__currentFilter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sortModal__currentFilter h3 {
  font-weight: 700;
}
.sortModal__filter-item {
  cursor: pointer;
  font-weight: 500;
}
</style>
