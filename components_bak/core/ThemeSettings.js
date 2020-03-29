
import colors from 'vuetify/es5/util/colors';
export default {
  data () {
    return {
      themeColor: 'indigo',
      sideBarOption: 'light',
      colors: colors
    };
  },
  computed: {
    themeColorOptions () {
      return [
        {
          key: 'blue',
          value: {
            sideNav: 'blue',
            mainNav: 'blue',
            sideManu: 'white'
          }
        },
        // {
        //   key: 'lightBlue',
        //   value: {
        //     sideNav: 'blue',
        //     mainNav: 'white',
        //     sideManu: 'blue lighten-1'
        //   }
        // },
        {
          key: 'teal',
          value: {
            sideNav: 'teal',
            mainNav: 'teal',
            sideManu: 'white'
          }
        },
        {
          key: 'red',
          value: {
            sideNav: 'red',
            mainNav: 'red',
            sideManu: 'white'
          }
        },
        {
          key: 'orange',
          value: {
            sideNav: 'orange',
            mainNav: 'orange',
            sideManu: 'white'
          }
        },
        {
          key: 'purple',
          value: {
            sideNav: 'purple',
            mainNav: 'purple',
            sideManu: 'white'
          }
        },
        {
          key: 'indigo',
          value: {
            sideNav: 'indigo',
            mainNav: 'indigo',
            sideManu: 'white'
          }
        },
        {
          key: 'cyan',
          value: {
            sideNav: 'cyan',
            mainNav: 'cyan',
            sideManu: 'white'
          }
        },
        {
          key: 'pink',
          value: {
            sideNav: 'pink',
            mainNav: 'pink',
            sideManu: 'white'
          }
        },
        {
          key: 'green',
          value: {
            sideNav: 'green',
            mainNav: 'green',
            sideManu: 'white'
          }
        }
      ];
    }
  },
  watch: {
    themeColor: {
      handler (val) {
        this.$vuetify.theme.primary = this.colors[val].base;

      },
      immediate: true
    },
    sideBarOption: {
      handler (val) {
        this.$vuetify.dark = (val === 'dark');
      },
      immediate: true
    }
  },

};

