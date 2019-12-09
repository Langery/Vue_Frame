const env = process.env.NODE_ENV
// your images path
const imgPathMode = {
  production: '',
  development: '/src/assets'
}
export const imgPath = env === 'production' ? imgPathMode.production : imgPathMode.development

/**
 * definition the status numbers
 * get the definition name to use the number
 */

export const User = {
  admin: 0,
  user: 1
}

// Or user the capitalization Name

export const infoStatus = {
  SUCCESS: '0',
  FAIL: '1',
  WARNING: '2',
  ERROR: '3'
}

/**
 * The status numbers can be String or Number class.
 */
