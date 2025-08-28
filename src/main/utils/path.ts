import { app } from 'electron';

const APP_PATH = app.getAppPath();
const isDev = !app.isPackaged;

export default {
  APP_PATH,
  MAIN_PATH: APP_PATH.concat(isDev ? '.' : '..', '/_dist/src/main/index.js'),
  PRELOAD_PATH: APP_PATH.concat(
    isDev ? '.' : '..',
    '/_dist/src/preload/index.js'
  ),
  RENDERER_PATH: APP_PATH.concat(
    isDev ? '.' : '..',
    '/_dist/renderer/index.js'
  ),
};
