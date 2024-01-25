<template>
  <div>
    <input
      type="text"
      placeholder="Введите название задачи"
      :value="$store.state.searchValue"
      @input="updateSearchValue($event.target.value)"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setSearchValue"]),
    updateSearchValue(newValue) {
      this.setSearchValue(newValue);
      const { query } = this.$route;
      this.$router.push({ query: { ...query, search: newValue } });
    },
  },
  mounted() {
    const value = this.$route.query.search || "";
    this.setSearchValue(value);
  },
};
</script>
<style>
input {
  margin: 15px auto;
  width: 50%;
  padding: 10px 0 10px 20px;
  font-size: 16px;
  outline: none;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
