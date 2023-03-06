# Install tailwind css using cli 

### `npm install -D tailwindcss`

# Create config file

### `npx tailwindcss init`

# Add all these three tailwind directives

### `@tailwind base; @tailwind components; @tailwind utilities;`

# set input output folder to add below build command in script tag 

### `"scripts": {"build": "tailwindcss -i src/style.css -o public/output.css -w" },`
### `"build": "postcss src/style.css -o public/output.css -w"` 

# For the repetion of utility class we use @apply like below

### `.btn{ @apply py-2 px-4 font-semibold }`

# Conditional Styling

### `md:text-center`

# State variants

### `hover, focus etc called states variant in Tailwind`

# Create tailwind.config.js file run below command

### `npx tailwindcss init`

# install postcss, postcss-cli and autoprefixer; post css is used transform css code, autoprefixer write hack css for all browser 

### `npm i postcss autoprefixer postcss-cli`

# create postcss config file run below command, below command create tailwind.config.js and postcss.config.js

### `npx tailwindcss init -p`

# JIT(Just in Time compiler) for this just ennable below JIT in tailwind.config.js file, to compile with jit we required postcss and autoprefixer

### `mode:'jit'` 

### `  purge: ['./public/**/*.{html,js}', './public/index.html',],` 

# Create custom plugin import below line

### `const plugin = require('tailwindcss/plugin')`

# to avoid write all custom base, component, utilities use preset, dark class on html tag to enable dark mode, and give value darkMode:'class' instaed fo false 

### `presets:[require('./preset/tailwind.preset');]`

# Run server use below command 

### `npm run build`

