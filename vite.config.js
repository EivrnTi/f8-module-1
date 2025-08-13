import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    // Đường dẫn gốc khi deploy (gh-pages cần đúng path)
    // base: "/f8-zoom-module-01",
    base: process.env.NODE_EVN === "production" ? "./f8-module-01" : "./",

    // Thư mục chính chứa HTML, SCSS, JS
    root: "src",

    // Thư mục chứa các file tĩnh như ảnh, fonts, v.v.
    publicDir: "../public",

    build: {
        // Nơi xuất ra sản phẩm sau khi build
        outDir: "../dist",
        emptyOutDir: true,

        // Khai báo các trang cần build (nhiều trang)
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                about: path.resolve(__dirname, "src/about.html"),
                practice: path.resolve(__dirname, "src/practice.html"),
                attorneys: path.resolve(__dirname, "src/attorneys.html"),
                blog: path.resolve(__dirname, "src/blog.html"),
                contact: path.resolve(__dirname, "src/contact.html"),
                error4xx: path.resolve(__dirname, "src/404.html"),
                comingSoon: path.resolve(__dirname, "src/coming-soon.html"),

            },
        },
    },

    plugins: [ViteEjsPlugin()],
});