const defaultTheme = require('tailwindcss/defaultTheme');
// const { isUsableColor } = require('./utils');

const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = (theme) => ({
	DEFAULT: {
		css: [
			{
				color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
				// maxWidth: '65ch',
				'[class~="lead"]': {
					color: theme('colors.gray.600', defaultTheme.colors.gray[600]),
				},
				a: {
					color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
					textDecoration: 'underline',
					fontWeight: '500',
				},
				strong: {
					color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
					fontWeight: '600',
				},
				// 'ol[type="A"]': {
				// 	listStyleType: 'upper-alpha',
				// },
				// 'ol[type="a"]': {
				// 	listStyleType: 'lower-alpha',
				// },
				// 'ol[type="A s"]': {
				// 	listStyleType: 'upper-alpha',
				// },
				// 'ol[type="a s"]': {
				// 	listStyleType: 'lower-alpha',
				// },
				// 'ol[type="I"]': {
				// 	listStyleType: 'upper-roman',
				// },
				// 'ol[type="i"]': {
				// 	listStyleType: 'lower-roman',
				// },
				// 'ol[type="I" s]': {
				// 	listStyleType: 'upper-roman',
				// },
				// 'ol[type="i" s]': {
				// 	listStyleType: 'lower-roman',
				// },
				// 'ol[type="1"]': {
				// 	listStyleType: 'decimal',
				// },
				// 'ol > li': {
				// 	position: 'relative',
				// },
				// 'ol > li::before': {
				// 	content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
				// 	position: 'absolute',
				// 	fontWeight: '400',
				// 	color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
				// },
				'ul, ol': {
					listStylePosition: 'outside',
					paddingLeft: '1em',
				},
				ul: {
					listStyleType: 'disc',
				},
				ol: {
					listStyleType: 'decimal',
				},
				'ol > li::marker': {
					color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
				},
				// 'ul > li': {
				// 	position: 'relative',
				// },
				// 'ul > li::before': {
				// 	content: '""',
				// 	position: 'absolute',
				// backgroundColor: theme(
				// 	'colors.gray.300',
				// 	defaultTheme.colors.gray[300]
				// ),
				// 	borderRadius: '50%',
				// },
				'ul > li::marker': {
					color: theme('colors.gray.300', defaultTheme.colors.gray[300]),
				},
				hr: {
					borderColor: theme('colors.gray.200', defaultTheme.colors.gray[200]),
					borderTopWidth: 1,
				},
				// blockquote: {
				// 	fontWeight: '500',
				// 	fontStyle: 'italic',
				// 	color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
				// 	borderLeftWidth: '0.25rem',
				// 	borderLeftColor: theme(
				// 		'colors.gray.200',
				// 		defaultTheme.colors.gray[200]
				// 	),
				// 	quotes: '"\\201C""\\201D""\\2018""\\2019"',
				// },
				// 'blockquote p:first-of-type::before': {
				// 	content: 'open-quote',
				// },
				// 'blockquote p:last-of-type::after': {
				// 	content: 'close-quote',
				// },
				'h1,h2,h3,h4': {
					color: theme('colors.purple.500', defaultTheme.colors.purple[500]),
					fontWeight: '100',
				},
				// 'figure figcaption': {
				// 	color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
				// },
				code: {
					color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
					fontWeight: '600',
				},
				'code::before': {
					content: '"`"',
				},
				'code::after': {
					content: '"`"',
				},
				'a code': {
					color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
				},
				pre: {
					color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
					backgroundColor: theme(
						'colors.gray.800',
						defaultTheme.colors.gray[800]
					),
					overflowX: 'auto',
				},
				'pre code': {
					backgroundColor: 'transparent',
					borderWidth: '0',
					borderRadius: '0',
					padding: '0',
					fontWeight: '400',
					color: 'inherit',
					fontSize: 'inherit',
					fontFamily: 'inherit',
					lineHeight: 'inherit',
				},
				'pre code::before': {
					content: 'none',
				},
				'pre code::after': {
					content: 'none',
				},
				// table: {
				// 	width: '100%',
				// 	tableLayout: 'auto',
				// 	textAlign: 'left',
				// 	marginTop: em(32, 16),
				// 	marginBottom: em(32, 16),
				// },
				// thead: {
				// 	color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
				// 	fontWeight: '600',
				// 	borderBottomWidth: '1px',
				// 	borderBottomColor: theme(
				// 		'colors.gray.300',
				// 		defaultTheme.colors.gray[300]
				// 	),
				// },
				// 'thead th': {
				// 	verticalAlign: 'bottom',
				// },
				// 'tbody tr': {
				// 	borderBottomWidth: '1px',
				// 	borderBottomColor: theme(
				// 		'colors.gray.200',
				// 		defaultTheme.colors.gray[200]
				// 	),
				// },
				// 'tbody tr:last-child': {
				// 	borderBottomWidth: '0',
				// },
				// 'tbody td': {
				// 	verticalAlign: 'top',
				// },
			},
			{
				'.mb-0': {
					marginBottom: '0 !important',
				},
				'.mt-0': {
					marginTop: '0 !important',
				},
				fontSize: rem(16),
				lineHeight: round(28 / 16),
				p: {
					marginTop: em(20, 16),
					marginBottom: em(20, 16),
				},
				'[class~="lead"]': {
					fontSize: em(20, 16),
					lineHeight: round(32 / 20),
					marginTop: em(24, 20),
					marginBottom: em(24, 20),
				},
				blockquote: {
					marginTop: em(32, 20),
					marginBottom: em(32, 20),
					// paddingLeft: em(20, 20),
				},
				h1: {
					fontSize: em(36, 16),
					marginTop: '0',
					marginBottom: em(32, 36),
					lineHeight: round(40 / 36),
				},
				h2: {
					fontSize: em(24, 16),
					marginTop: em(48, 24),
					marginBottom: em(24, 24),
					lineHeight: round(32 / 24),
				},
				h3: {
					fontSize: em(20, 16),
					marginTop: em(32, 20),
					marginBottom: em(12, 20),
					lineHeight: round(32 / 20),
				},
				h4: {
					marginTop: em(24, 16),
					marginBottom: em(8, 16),
					lineHeight: round(24 / 16),
				},
				// img: {
				// 	marginTop: em(32, 16),
				// 	marginBottom: em(32, 16),
				// },
				// video: {
				// 	marginTop: em(32, 16),
				// 	marginBottom: em(32, 16),
				// },
				// figure: {
				// 	marginTop: em(32, 16),
				// 	marginBottom: em(32, 16),
				// },
				// 'figure > *': {
				// 	marginTop: '0',
				// 	marginBottom: '0',
				// },
				// 'figure figcaption': {
				// 	fontSize: em(14, 16),
				// 	lineHeight: round(20 / 14),
				// 	marginTop: em(12, 14),
				// },
				code: {
					fontSize: em(14, 16),
				},
				'h2 code': {
					fontSize: em(21, 24),
				},
				'h3 code': {
					fontSize: em(18, 20),
				},
				pre: {
					fontSize: em(14, 16),
					lineHeight: round(24 / 14),
					marginTop: em(24, 14),
					marginBottom: em(24, 14),
					borderRadius: rem(6),
					paddingTop: em(12, 14),
					paddingRight: em(16, 14),
					paddingBottom: em(12, 14),
					paddingLeft: em(16, 14),
				},
				ol: {
					marginTop: em(20, 16),
					marginBottom: em(20, 16),
				},
				ul: {
					marginTop: em(20, 16),
					marginBottom: em(20, 16),
				},
				li: {
					marginTop: em(8, 16),
					marginBottom: em(8, 16),
				},
				// 'ol > li': {
				// 	paddingLeft: em(28, 16),
				// },
				// 'ol > li::before': {
				// 	left: '0',
				// },
				// 'ul > li': {
				// 	paddingLeft: em(28, 16),
				// },
				// 'ul > li::before': {
				// 	width: em(6, 16),
				// 	height: em(6, 16),
				// 	top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
				// 	left: em(4, 16),
				// },
				'> ul > li p': {
					marginTop: em(12, 16),
					marginBottom: em(12, 16),
				},
				'> ul > li > *:first-child': {
					marginTop: em(20, 16),
				},
				'> ul > li > *:last-child': {
					marginBottom: em(20, 16),
				},
				'> ol > li > *:first-child': {
					marginTop: em(20, 16),
				},
				'> ol > li > *:last-child': {
					marginBottom: em(20, 16),
				},
				'ul ul, ul ol, ol ul, ol ol': {
					marginTop: em(12, 16),
					marginBottom: em(12, 16),
				},
				hr: {
					marginTop: em(48, 16),
					marginBottom: em(48, 16),
				},
				'hr + *': {
					marginTop: '0',
				},
				'h2 + *': {
					marginTop: '0',
				},
				'h3 + *': {
					marginTop: '0',
				},
				'h4 + *': {
					marginTop: '0',
				},
				table: {
					fontSize: em(14, 16),
					lineHeight: round(24 / 14),
				},
				'thead th': {
					paddingRight: em(8, 14),
					paddingBottom: em(8, 14),
					paddingLeft: em(8, 14),
				},
				'thead th:first-child': {
					paddingLeft: '0',
				},
				'thead th:last-child': {
					paddingRight: '0',
				},
				'tbody td': {
					paddingTop: em(8, 14),
					paddingRight: em(8, 14),
					paddingBottom: em(8, 14),
					paddingLeft: em(8, 14),
				},
				'tbody td:first-child': {
					paddingLeft: '0',
				},
				'tbody td:last-child': {
					paddingRight: '0',
				},
			},
			{
				'> :first-child': {
					marginTop: '0',
				},
				'> :last-child': {
					marginBottom: '0',
				},
			},
		],
	},
	sm: {
		css: [
			{
				fontSize: rem(14),
				lineHeight: round(24 / 14),
				p: {
					marginTop: em(16, 14),
					marginBottom: em(16, 14),
				},
				'[class~="lead"]': {
					fontSize: em(18, 14),
					lineHeight: round(28 / 18),
					marginTop: em(16, 18),
					marginBottom: em(16, 18),
				},
				blockquote: {
					marginTop: em(24, 18),
					marginBottom: em(24, 18),
					// 	paddingLeft: em(20, 18),
				},
				h1: {
					fontSize: em(30, 14),
					marginTop: '0',
					marginBottom: em(24, 30),
					lineHeight: round(36 / 30),
				},
				h2: {
					fontSize: em(20, 14),
					marginTop: em(32, 20),
					marginBottom: em(16, 20),
					lineHeight: round(28 / 20),
				},
				h3: {
					fontSize: em(18, 14),
					marginTop: em(28, 18),
					marginBottom: em(8, 18),
					lineHeight: round(28 / 18),
				},
				h4: {
					marginTop: em(20, 14),
					marginBottom: em(8, 14),
					lineHeight: round(20 / 14),
				},
				// img: {
				// 	marginTop: em(24, 14),
				// 	marginBottom: em(24, 14),
				// },
				// video: {
				// 	marginTop: em(24, 14),
				// 	marginBottom: em(24, 14),
				// },
				// figure: {
				// 	marginTop: em(24, 14),
				// 	marginBottom: em(24, 14),
				// },
				// 'figure > *': {
				// 	marginTop: '0',
				// 	marginBottom: '0',
				// },
				// 'figure figcaption': {
				// 	fontSize: em(12, 14),
				// 	lineHeight: round(16 / 12),
				// 	marginTop: em(8, 12),
				// },
				code: {
					fontSize: em(12, 14),
				},
				'h2 code': {
					fontSize: em(18, 20),
				},
				'h3 code': {
					fontSize: em(16, 18),
				},
				pre: {
					fontSize: em(12, 14),
					lineHeight: round(20 / 12),
					marginTop: em(20, 12),
					marginBottom: em(20, 12),
					borderRadius: rem(4),
					paddingTop: em(8, 12),
					paddingRight: em(12, 12),
					paddingBottom: em(8, 12),
					paddingLeft: em(12, 12),
				},
				ol: {
					marginTop: em(16, 14),
					marginBottom: em(16, 14),
				},
				ul: {
					marginTop: em(16, 14),
					marginBottom: em(16, 14),
				},
				li: {
					marginTop: em(4, 14),
					marginBottom: em(4, 14),
				},
				// 'ol > li': {
				// 	paddingLeft: em(22, 14),
				// },
				// 'ol > li::before': {
				// 	left: '0',
				// },
				// 'ul > li': {
				// 	paddingLeft: em(22, 14),
				// },
				// 'ul > li::before': {
				// 	height: em(5, 14),
				// 	width: em(5, 14),
				// 	top: `calc(${em(24 / 2, 14)} - ${em(2.5, 14)})`,
				// 	left: em(3, 14),
				// },
				'> ul > li p': {
					marginTop: em(8, 14),
					marginBottom: em(8, 14),
				},
				'> ul > li > *:first-child': {
					marginTop: em(16, 14),
				},
				'> ul > li > *:last-child': {
					marginBottom: em(16, 14),
				},
				'> ol > li > *:first-child': {
					marginTop: em(16, 14),
				},
				'> ol > li > *:last-child': {
					marginBottom: em(16, 14),
				},
				'ul ul, ul ol, ol ul, ol ol': {
					marginTop: em(8, 14),
					marginBottom: em(8, 14),
				},
				hr: {
					marginTop: em(40, 14),
					marginBottom: em(40, 14),
				},
				'hr + *': {
					marginTop: '0',
				},
				'h2 + *': {
					marginTop: '0',
				},
				'h3 + *': {
					marginTop: '0',
				},
				'h4 + *': {
					marginTop: '0',
				},
				table: {
					fontSize: em(12, 14),
					lineHeight: round(18 / 12),
				},
				'thead th': {
					paddingRight: em(12, 12),
					paddingBottom: em(8, 12),
					paddingLeft: em(12, 12),
				},
				'thead th:first-child': {
					paddingLeft: '0',
				},
				'thead th:last-child': {
					paddingRight: '0',
				},
				'tbody td': {
					paddingTop: em(8, 12),
					paddingRight: em(12, 12),
					paddingBottom: em(8, 12),
					paddingLeft: em(12, 12),
				},
				'tbody td:first-child': {
					paddingLeft: '0',
				},
				'tbody td:last-child': {
					paddingRight: '0',
				},
			},
			{
				'> :first-child': {
					marginTop: '0',
				},
				'> :last-child': {
					marginBottom: '0',
				},
			},
		],
	},
	lg: {
		css: [
			{
				fontSize: rem(18),
				lineHeight: round(32 / 18),
				p: {
					marginTop: em(24, 18),
					marginBottom: em(24, 18),
				},
				'[class~="lead"]': {
					fontSize: em(22, 18),
					lineHeight: round(32 / 22),
					marginTop: em(24, 22),
					marginBottom: em(24, 22),
				},
				blockquote: {
					marginTop: em(40, 24),
					marginBottom: em(40, 24),
					// 	paddingLeft: em(24, 24),
				},
				h1: {
					fontSize: em(48, 18),
					marginTop: '0',
					marginBottom: em(40, 48),
					lineHeight: round(48 / 48),
				},
				h2: {
					fontSize: em(30, 18),
					marginTop: em(56, 30),
					marginBottom: em(32, 30),
					lineHeight: round(40 / 30),
				},
				h3: {
					fontSize: em(24, 18),
					marginTop: em(40, 24),
					marginBottom: em(16, 24),
					lineHeight: round(36 / 24),
				},
				h4: {
					marginTop: em(32, 18),
					marginBottom: em(8, 18),
					lineHeight: round(28 / 18),
				},
				// img: {
				// 	marginTop: em(32, 18),
				// 	marginBottom: em(32, 18),
				// },
				// video: {
				// 	marginTop: em(32, 18),
				// 	marginBottom: em(32, 18),
				// },
				// figure: {
				// 	marginTop: em(32, 18),
				// 	marginBottom: em(32, 18),
				// },
				// 'figure > *': {
				// 	marginTop: '0',
				// 	marginBottom: '0',
				// },
				// 'figure figcaption': {
				// 	fontSize: em(16, 18),
				// 	lineHeight: round(24 / 16),
				// 	marginTop: em(16, 16),
				// },
				code: {
					fontSize: em(16, 18),
				},
				'h2 code': {
					fontSize: em(26, 30),
				},
				'h3 code': {
					fontSize: em(21, 24),
				},
				pre: {
					fontSize: em(16, 18),
					lineHeight: round(28 / 16),
					marginTop: em(32, 16),
					marginBottom: em(32, 16),
					borderRadius: rem(6),
					paddingTop: em(16, 16),
					paddingRight: em(24, 16),
					paddingBottom: em(16, 16),
					paddingLeft: em(24, 16),
				},
				ol: {
					marginTop: em(24, 18),
					marginBottom: em(24, 18),
				},
				ul: {
					marginTop: em(24, 18),
					marginBottom: em(24, 18),
				},
				li: {
					marginTop: em(12, 18),
					marginBottom: em(12, 18),
				},
				// 'ol > li': {
				// 	paddingLeft: em(30, 18),
				// },
				// 'ol > li::before': {
				// 	left: '0',
				// },
				// 'ul > li': {
				// 	paddingLeft: em(30, 18),
				// },
				// 'ul > li::before': {
				// 	width: em(6, 18),
				// 	height: em(6, 18),
				// 	top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
				// 	left: em(4, 18),
				// },
				'> ul > li p': {
					marginTop: em(16, 18),
					marginBottom: em(16, 18),
				},
				'> ul > li > *:first-child': {
					marginTop: em(24, 18),
				},
				'> ul > li > *:last-child': {
					marginBottom: em(24, 18),
				},
				'> ol > li > *:first-child': {
					marginTop: em(24, 18),
				},
				'> ol > li > *:last-child': {
					marginBottom: em(24, 18),
				},
				'ul ul, ul ol, ol ul, ol ol': {
					marginTop: em(16, 18),
					marginBottom: em(16, 18),
				},
				hr: {
					marginTop: em(56, 18),
					marginBottom: em(56, 18),
				},
				'hr + *': {
					marginTop: '0',
				},
				'h2 + *': {
					marginTop: '0',
				},
				'h3 + *': {
					marginTop: '0',
				},
				'h4 + *': {
					marginTop: '0',
				},
				table: {
					fontSize: em(16, 18),
					lineHeight: round(24 / 16),
				},
				'thead th': {
					paddingRight: em(12, 16),
					paddingBottom: em(12, 16),
					paddingLeft: em(12, 16),
				},
				'thead th:first-child': {
					paddingLeft: '0',
				},
				'thead th:last-child': {
					paddingRight: '0',
				},
				'tbody td': {
					paddingTop: em(12, 16),
					paddingRight: em(12, 16),
					paddingBottom: em(12, 16),
					paddingLeft: em(12, 16),
				},
				'tbody td:first-child': {
					paddingLeft: '0',
				},
				'tbody td:last-child': {
					paddingRight: '0',
				},
			},
			{
				'> :first-child': {
					marginTop: '0',
				},
				'> :last-child': {
					marginBottom: '0',
				},
			},
		],
	},

	// Add color modifiers
	...Object.entries(theme('colors')).reduce((reduced, [color, values]) => {
		// if (!isUsableColor(color, values)) {
		// 	return reduced;
		// }

		return {
			...reduced,
			[color]: {
				css: [
					{
						a: { color: values[600] },
						'a code': { color: values[600] },
					},
				],
			},
		};
	}, {}),
});
