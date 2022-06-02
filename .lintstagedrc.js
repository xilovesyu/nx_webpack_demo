module.exports = {
  'packages/**/src/**/*.{js,jsx,ts,tsx}': 'yarn lint:fix',
  '*': 'yarn prettier_and_stage'
}
