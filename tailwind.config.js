/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/components/FrontCard.vue"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'desktopBackground': "url('./src/assets/bg-main-desktop.png')",
                'mobileBackground': "url('./src/assets/bg-main-mobile.png')",
                'frontCardBackground': "url(./src/assets/bg-card-front.png)",
                'backCardBackground': "url(./src/assets/bg-card-back.png)",
            },
            screens: {
                'mobile': {'max': '700px'}
            },
            colors: {
                firstGradient: 'hsl(var(--color-firstGradient) / <alpha-value>)',
                secondGradient: 'hsl(var(--color-secondGradient) / <alpha-value>)',
                white: 'hsl(var(--color-white) / <alpha-value>)',
                lightGrayishViolet: 'hsl(var(--color-lightGrayishViolet) / <alpha-value>)',
                darkGrayishViolet: 'hsl(var(--color-darkGrayishViolet) / <alpha-value>)',
                veryDarkViolet: 'hsl(var( --color-veryDarkViolet) / <alpha-value>)',
            }
        },
    },
    plugins: [],
}