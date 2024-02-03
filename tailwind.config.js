/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        "bg-green-600",
        "bg-red-500",
        "bg-blue-200",
        "bg-blue-600",
        "bg-gray-300",
    ],
};
