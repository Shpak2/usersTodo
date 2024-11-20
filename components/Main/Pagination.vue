<template>
  <div class="pagination">
    <button
      class="pagination-btn"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <svg viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </button>

    <button
      v-for="page in pageButtons"
      :key="page"
      class="pagination-btn"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination-btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <svg viewBox="0 0 24 24" data-testid="NavigateNextIcon">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    currentPage: number;
    totalPages: number;
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:page']);

  const changePage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
      emit('update:page', page);
    }
  };

  const pageButtons = computed(() => {
    const totalButtons = 5;
    const half = Math.floor(totalButtons / 2);

    let start = props.currentPage - half;
    let end = props.currentPage + half;

    if (start < 1) {
      start = 1;
      end = totalButtons;
    }
    if (end > props.totalPages) {
      end = props.totalPages;
      start = props.totalPages - totalButtons + 1;
    }

    if (start < 1) {
      start = 1;
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  });
</script>
