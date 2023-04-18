# Aplikasi CRUD Sederhana Next Js, Tailwind CSS, DaisyUi & json-server

### Next Js

Next Js merupakan framework yang dikembangkan berdasarkan React Js sebagai libary

untuk menginstall next maka harus menggunakan command:

```
    npx create-next-app@latest
```

setelah melakukan installation maka anda harus melakukan configuration yang ada pada terminal anda
seperti pada dokumentasi
https://nextjs.org/

### Tailwind CSS

tailwind css merupakan framework CSS yang berfungsi untuk memberikan keindahan pada tampilan website yang kita buat

```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

setelah copy config yang ada dibawah ke dalam tailwind.config.js

```
    module.exports = {
        content: [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",

            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
```

ganti semua condingan yang ada pada file global.css dengan codingan yang sudah ada pada dibawah ini.

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Daisy UI

Daisy UI merupakan css framework yang memudahkan seperti bootsrap tetapi menggunakan base dari tailwind css sehingga tentu saja komponen yang ada tailwind css bisa digunakan di dalam daisyui ini, hal yang harus dilakukan adalah menginstall daisyui dengan menggunakan command yang ada dibawah ini

```
npm i daisyui
```

setelah menginstall kemabli ke file tailwind.config.js untuk menambahkan daisyui sebagain plugin seperti dibawah ini

```

    module.exports = {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
            './app/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
            extend: {},
        },
        plugins: [require('daisyui')],
    }

```

jika semua step sudah dilakukan maka anda cuma harus mengikut semua yang ada pada folder products didalam folder app

serta harus menginstall json-server

```
    npm i json-server
```

setelah sudah menginstall json-server maka harus membuat file db.json sebagai fake API yang akan berjalan dilocal komputer masing masing, sebagai fake API
