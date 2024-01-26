<template>
  <header>
    <h1>task manager</h1>
    <div>
      <svg
        v-if="isAuth"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggleAuth"
      >
        <path
          d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <button class="auth__btn" v-else @click="toggleAuth">Войти</button>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isAuth: false,
    };
  },
  methods: {
    toggleAuth() {
      this.isAuth = !this.isAuth;
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  text-transform: uppercase;
  cursor: pointer;
}
header svg {
  cursor: pointer;
}
.auth__btn {
  padding: 10px 15px;
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
.auth__btn:hover {
  background-color: #000;
  color: #fff;
}
</style>
