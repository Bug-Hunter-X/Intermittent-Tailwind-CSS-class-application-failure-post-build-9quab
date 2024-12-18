```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add this purge option.  Make sure your build process purges unused styles.  If using a build tool like Vite or Webpack, this may be handled automatically.
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
}
```
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-red-500 p-4">
    This should be red, and now it will be consistently.
  </div>
</body>
</html>
```