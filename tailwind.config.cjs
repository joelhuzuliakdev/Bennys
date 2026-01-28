// tailwind.config.cjs
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx}" // Escanea todos tus archivos en src
    ],
    theme: {
        extend: {
            colors: {
                brand: "#dc2626", // Rojo principal (era azul)
                primary: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',  // Rojo principal
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                },
                secondary: {
                    50: '#ffffff',
                    100: '#fafafa',
                    200: '#f5f5f5',
                    300: '#e5e5e5',
                    400: '#d4d4d4',
                    500: '#a3a3a3',
                    600: '#737373',
                    700: '#525252',
                    800: '#404040',
                    900: '#262626',
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"], // tipografía personalizada
            },
        },
    },
    plugins: [],
};