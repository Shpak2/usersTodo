<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
    <button @click="toggleSearch" class="header__btn">
      <svg v-if="!isSearchOpen" style="width: 70%;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 416.656 416.656" xml:space="preserve">
        <g>
          <path fill="#3399ff" d="M372.787,43.904C344.475,15.593,306.832,0,266.791,0c-40.041,0-77.685,15.593-105.996,43.904
            c-48.66,48.66-56.799,122.723-24.435,179.891L11.744,348.416c-15.611,15.615-15.611,40.926,0,56.531
            c15.606,15.611,40.916,15.613,56.531,0l124.581-124.574c22.292,12.678,47.594,19.428,73.935,19.428
            c40.039,0,77.683-15.593,105.996-43.904C431.232,197.449,431.232,102.35,372.787,43.904z M349.232,232.342
            c-22.022,22.021-51.3,34.147-82.441,34.147c-31.143,0-60.421-12.127-82.441-34.147c-45.458-45.458-45.458-119.425,0-164.883
            c22.021-22.021,51.299-34.147,82.441-34.147c31.142,0,60.421,12.127,82.441,34.147
            C394.689,112.916,394.689,186.883,349.232,232.342z"/>
          <path fill="#3399ff" d="M337.644,88.941c-4.88-4.882-12.796-4.885-17.678-0.002c-4.883,4.881-4.883,12.795-0.002,17.678
            c23.083,23.089,23.083,60.656,0,83.744c-4.881,4.882-4.881,12.797,0.002,17.678c2.441,2.44,5.64,3.66,8.838,3.66
            c3.199,0,6.398-1.221,8.84-3.662C370.471,175.203,370.471,121.777,337.644,88.941z"/>
        </g>
      </svg>
      <svg v-if="isSearchOpen" style="width: 80%" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path fill="#3399ff" d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
    </button>
  </header>
</template>

<script setup lang="ts">
  import { useSearchStore } from '~/stores/searchStore';

  const searchStore = useSearchStore();
  const isSearchOpen = computed(() => searchStore.isSearchOpen);

  const toggleSearch = () => {
    searchStore.toggleSearch();
  };

  defineProps<{
    title: string;
  }>();
</script>
