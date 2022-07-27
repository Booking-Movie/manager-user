module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadowbox: '2px 15px 20px  rgba(0, 0, 0, 0.1)',
        shadow_1: '0 5px 13px rgb(0, 0, 0,0.7)'
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px' },
        xl: { min: '1280px' }
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif']
      },
      fontSize: {
        'heading-1': '3.653rem',
        'heading-2': '2.887rem',
        'heading-3': '2.281rem',
        'heading-4': '1.802rem',
        'heading-5': '1.424rem',
        subtitle: '1.125rem',
        body: '1rem',
        footer: '0.889rem',
      },
      backgroundImage: {
        'hero-img': "url('/public/images/movie-login.jpg')"
      }
    }
  },
  plugins: []
}
