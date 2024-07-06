/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-2': '200vh', // adjust as needed
        'screen-3': '150vh', // adjust as needed
      },
      width: {
        'screen-2': '68vw',
        'screen-3': '70vw',
        'screen-4': '238vw',
        'screen-5': '116vw',
      },
      top: {
        'full-1': '130vh',
      },
      left: {
        'full-2': '228px',
        'full-3': '128vh',
      }, 
      right: {
        'full-2': '54vw'
      }
    },
  },
  
  plugins: [],
}

