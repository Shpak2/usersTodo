<template>
  <div class="todo">
    <h1 class="todo__title">{{ user.name }} <br>Todo List</h1>
    <nuxt-link to="/" class="todo__link">Back to Users List</nuxt-link>
  </div>
</template>


<script setup lang="ts">
  interface User {
    name: string;
  }

  const props = defineProps<{
    user: User;
  }>();
</script>

