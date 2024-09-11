// noinspection WebpackConfigHighlighting
module.exports = {
  development: {
    title: 'Demo For Development',
    reactUrl: 'https://unpkg.com/react@18.3.1/umd/react.development.js',
    reactDomUrl:
      'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
    reactDomClientUrl: 'https://unpkg.com/react-dom@18.3.1/client.js'
  },
  production: {
    title: 'Demo For Production',
    reactUrl: 'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
    reactDomUrl:
      'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
    reactDomClientUrl: 'https://unpkg.com/react-dom@18.3.1/client.js'
  }
}
