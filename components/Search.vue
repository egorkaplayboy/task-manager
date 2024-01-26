<template>
  <div class="sort">
    <input
      type="text"
      placeholder="Введите название задачи"
      :value="$store.state.sort.searchValue"
      @input="updateSearchValue($event.target.value)"
    />
    <div class="sort__filters">
      <h4
        class="sort__filters__item"
        @click="showSortModal(filter)"
        v-for="filter in filters"
        :key="filter"
      >
        {{ filter.label }}
      </h4>
    </div>
    <button class="sort__filters__item" @click="resetSort">Сбросить</button>
    <sort-modal
      :currentFilter="selectedFilter"
      v-if="isSortModalVisible"
      @closeSortModal="closeSortModal"
    />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isSortModalVisible: false,
      selectedFilter: null,
    };
  },
  computed: {
    ...mapState("sort", ["filters"]),
  },
  methods: {
    ...mapMutations("sort", ["setSearchValue"]),
    ...mapMutations(["resetSort"]),
    updateSearchValue(newValue) {
      this.setSearchValue(newValue);
      const { query } = this.$route;
      this.$router.push({ query: { ...query, search: newValue } });
    },
    showSortModal(filter) {
      this.isSortModalVisible = true;
      this.selectedFilter = filter;
    },
    closeSortModal() {
      this.isSortModalVisible = false;
      this.selectedFilter = null;
    },
  },
  mounted() {
    const value = this.$route.query.search || "";
    this.setSearchValue(value);
  },
};
</script>
<style>
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  margin: 15px 0;
  width: 50%;
  padding: 10px 0 10px 20px;
  font-size: 16px;
  outline: none;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
.sort__filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort__filters__item {
  padding: 10px 15px;
  margin: 0 10px;
  font-size: 16px;
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: 700;
  transition: color, background-color 0.2s ease;
  cursor: pointer;
}
.sort__filters__item:hover {
  background-color: #000;
  color: #fff;
}
</style>
