<template>
  <div v-if="todos.length > 0" class="todo-list">
    <ul class="todo-list__items">
      <li
        v-for="todo in todos"
        class="todo-list__item"
        :key="todo.id"
        :class="todo.completed ? 'completed' : 'not-completed'"
        >
        <p class="todo-list__item-title"><strong>{{ todo.title }}</strong></p>
        <p class="todo-list__item-status">
          Status:
          <span class="todo-list__status">
            {{ todo.completed ? 'Completed' : 'Not Completed' }}
          </span>
        </p>
      </li>
    </ul>
  </div>
  <div v-else class="todo-list__empty">
    <p class="todo-list__empty-message">No todos found.</p>
  </div>
</template>


<script setup lang="ts">
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const props = defineProps<{
    todos: Todo[];
  }>();
</script>

