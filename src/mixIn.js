export const mixIn = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subtitile: "TOLYO TO SAIKOU"
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
}