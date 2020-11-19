const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./tailwind.colors');
const gutenberg = require('tailwindcss-gutenberg-theme');

module.exports = {
	future: {
		purgeLayersByDefault: true,
	},
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
		},
		container: {
			center: true,
			padding: '1rem',
		},
		gutenberg: (theme) => ({
			colors: {
				primary: theme('colors.primary'),
				secondary: theme('colors.secondary'),
				loud: theme('colors.loud'),
				light: theme('colors.light'),
				dark: theme('colors.dark'),
				black: theme('colors.black'),
				white: theme('colors.white'),
			},
			foregroundColors: [theme('colors.black'), theme('colors.white')],
			fontSizes: {
				small: theme('fontSize.sm'),
				default: theme('fontSize.base'),
				medium: theme('fontSize.lg'),
				large: theme('fontSize.xl'),
				huge: theme('fontSize.2xl'),
			},
			alignments: {
				// Scrollbar width which defaults to macOS 0px but requires overflow-x
				// hidden on <html>. If that's a dealbreaker set it to 15px and some
				// users might have a small gutter.
				scrollbarWidth: '15px',

				// Content areas default width without alignments required when using
				// `sizer` property.
				contentWidth: '672px',

				// A max width cap for alignfull and alignwide
				// maxWidth: "1600px",

				// Enable with a truthy value
				alignfull: true,

				// Core Group blocks default to 30px side padding.
				backgroundGutter: '30px',

				// Or override the above configurations per alignment type.
				alignwide: {
					// Add a minimum gutter on the left and right of the alignment
					gutter: theme('spacing.1'),
					maxWidth: '1280px',

					// Add a sizing factor to fluidly grow the alignment.
					// Use values between 1.0 and 1.99 where lower means tighter to
					// viewport edge and larger means further.
					// NOTE the values of maxWidth, contentWidth and gutter all have
					// to use the same units for this to work. calc() in media queries
					// does not have good browser support
					sizer: 1.5,
				},

				// Add responsive alignleft and alignright support.
				alignleftright: {
					// Screen size when alignment is triggered, defaults to an arbitrary
					// 640px
					minWidth: theme('screens.sm'),

					// Side margin, defaults to core's 1em.
					margin: theme('spacing.2'),
				},
			},
		}),
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
			typography: {
				default: {
					css: {
						maxWidth: null,
						h1: {
							color: colors.purple[600],
							fontWeight: '100',
						},
						h2: {
							color: colors.purple[600],
							fontWeight: '100',
						},
						h3: {
							color: colors.purple[600],
							fontWeight: '100',
						},
						h4: {
							color: colors.purple[600],
							fontWeight: '100',
						},
						'p+p': {
							textIndent: '5ch',
							marginTop: '-1.25em',
						},
					},
				},
			},
		},
	},
	variants: {},
	corePlugins: {},
	plugins: [
		require('@tailwindcss/custom-forms'),
		require('@tailwindcss/typography')(),
		// Block Editor Color Palette utilities
		gutenberg.colors,

		// Block Editor Font Size utilities
		gutenberg.fontSizes,

		// Foreground color components for Block Editor background colors.
		gutenberg.foregroundColors,

		// Alignment support
		gutenberg.alignments,

		// Block Editor back-end styling fixes wrapped as components.
		gutenberg.admin,
	],
	purge: {
		layers: ['utilities'],
		content: ['./views/**/*.twig'],
		options: {
			whitelist: ['mt-4'],
			whitelistPatterns: [/has-/],
		},
	},
};
