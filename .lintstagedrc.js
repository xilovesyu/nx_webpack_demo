module.exports = {
  'packages/**/src/**/*.{js,jsx,ts,tsx}': 'yarn lint:fix',
  '**/*.{js,jsx,ts,tsx}': 'yarn prettier:write'
}
