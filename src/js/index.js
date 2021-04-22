import '../sass/index.scss';
import initApp from './app';

if (module.hot) {
  module.hot.accept('./app.js', () => {
    initApp();
  });
}
