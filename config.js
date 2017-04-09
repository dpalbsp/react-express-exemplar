/**
 * Created by Tia on 4/2/2017.
 */
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'Development';

export const logMessage = (message) => {
  console.info('*****************');
  console.info(message);
  console.info('*****************');
};

export default {
  port: env.PORT || 8080,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};