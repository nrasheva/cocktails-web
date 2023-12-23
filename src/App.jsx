import './App.css';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer/footer';
import { Navigation } from './components/Navigation/Navigation';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
