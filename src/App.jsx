import './App.css';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer/footer';
import { Navigation } from './components/Navigation/Navigation';
import { Modal } from './layout/Modal/Modal';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Modal />
      <Navigation />
      <div className='mt-14'>
        <Outlet />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
