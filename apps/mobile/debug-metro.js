try {
  console.log('Attempting to require metro config...');
  const config = require('./metro.config.js');
  console.log('Success requiring metro config');
} catch (e) {
  console.error('Failed to require metro.config.js:', e);
}
