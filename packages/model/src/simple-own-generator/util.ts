const { upperFirst } = require('lodash')

export const transPathToName = (
  path: string,
  splitor = '.',
  formatter = 'Camel'
) => {
  if (formatter && formatter !== 'Camel' && formatter !== 'Pascal') {
    console.error('unsupported formatter')
  }
  const paths = path.split(splitor)
  const results = paths
    .map((onePath, index) => {
      //replace all non a-z,A-Z, 0-9, $, _
      let transFormOtherUnSupported = onePath.replace(/[^a-zA-Z0-9$_]/g, '')
      if (index === 0) {
        if (formatter === 'Pascal') {
          transFormOtherUnSupported = upperFirst(transFormOtherUnSupported)
        }
        if (/\^d+.*/.test(transFormOtherUnSupported)) {
          onePath = `_${onePath}`
        }
      } else {
        transFormOtherUnSupported = upperFirst(transFormOtherUnSupported)
      }
      return transFormOtherUnSupported
    })
    .join('')
  return results
}

export const transPathParamerters = (path: string) => {
  return path.replace(/({.*?})/g, '$ $1').replace(/\s+/g, '')
}

// export const transParameterTypeToTsType = (type: string) => {

// }
