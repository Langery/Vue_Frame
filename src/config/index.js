// import ENV from './env';
const env = process.env.NODE_ENV
const production = {
  // production address
}

const development = {
  // development address
}

const location = env === 'production' ? production : development
export default location
