module.exports = {
  content: [
    './layouts/**/*.{html,js}',
    './content/**/*.{html,js,md}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        'bg-nav': 'var(--bg-nav)',
        'bg-card': 'var(--bg-card)',
      },
      fontFamily: {
        body: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        accent: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
} 