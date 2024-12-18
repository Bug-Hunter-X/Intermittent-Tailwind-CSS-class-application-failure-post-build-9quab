```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
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
    This should be red, but might not be.
  </div>
</body>
</html>
```