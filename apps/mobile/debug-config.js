try {
  console.log('Attempting to require design tokens...');
  const tokens = require('@teaching-kids/design-tokens');
  console.log('Success requiring package:', Object.keys(tokens));
} catch (e) {
  console.error('Failed to require package @teaching-kids/design-tokens:', e.message);
}

try {
  console.log('Attempting to require local tailwind config...');
  const config = require('./tailwind.config.js');
  console.log('Success requiring tailwind config');
} catch (e) {
  console.error('Failed to require tailwind.config.js:', e);
}
