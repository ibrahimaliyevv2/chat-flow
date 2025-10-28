import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    // 1. Target the root index.html file
    // 2. Target all files (*.js, *.jsx, *.ts, *.tsx) within the 'src' directory and its subdirectories (**)
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
}
