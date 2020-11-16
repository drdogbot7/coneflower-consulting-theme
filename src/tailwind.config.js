const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./tailwind.colors');

module.exports = {
  theme: {
    /**
     * Use Wordpress Breakpoints
     * https://github.com/WordPress/gutenberg/blob/master/packages/base-styles/_breakpoints.scss
     */
    screens: {
      sm: '600px',
      md: '782px',
      lg: '960px',
      xl: '1080px',
      wide: '1280px',
      huge: '1440px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
      },
      colors: {
        tint: colors.tint,
        shade: colors.shade,
        orange: colors.orange,
        purple: colors.purple,
        lime: colors.lime,
        brands: colors.brands,
        primary: colors.purple['500'],
        secondary: colors.lime['500'],
        loud: colors.orange['500'],
        light: defaultTheme.colors.gray['200'],
        dark: defaultTheme.colors.gray['800'],
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: ['./views/**/*.twig'],
  },
};
