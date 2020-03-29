
export default {
  name: 'app-fab',

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll () {
      if (typeof window === 'undefined') return;

      const top = window.pageYOffset ||
        document.documentElement.offsetTop ||
        0;

      this.fab = top > 300;
    },
    toTop () {
      this.$router.push({ hash: '' });
      this.$vuetify.goTo(0);
    }
  }
};
