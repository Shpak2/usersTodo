import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    isSearchOpen: false,
  }),
  actions: {
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    openSearch() {
      this.isSearchOpen = true;
    },
    closeSearch() {
      this.isSearchOpen = false;
    },
  },
});
