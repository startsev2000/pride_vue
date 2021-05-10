<template>
  <div
    v-for="{ id, name, year, job, description } in employees"
    :key="id"
    class="wrapper"
  >
    <div class="profile">
      <div class="name">
        <p>{{ name }}</p>
      </div>
      <div class="year">
        <p>{{ year }}</p>
      </div>
      <div class="job">
        <p>{{ job }}</p>
      </div>
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { loadEmployees, deleteEmployee } from "@/main";

export default {
  setup() {
    const employees = loadEmployees();
    return { employees, deleteEmployee };
  },
};
</script>

<style lang="scss">
.wrapper {
  margin-left: 20px;
  margin-top: 20px;
  width: 320px;
  background: #fdfeff;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 8px 40px rgba(#000000, 0.2);
}
.profile {
  margin-top: 2.2em;
  position: relative;
  text-align: center;
  .name {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .year,
  .job {
    font-size: 0.75em;
    font-weight: 300;
    text-align: center;
    padding-top: 1px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .description {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1.3em;
  }
}
</style>