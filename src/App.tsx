import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import { ROUTE_PATH } from './constants/routePath';
import Team from './pages/Team';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path={ROUTE_PATH.HOME} element={<Home />} />
            <Route path={ROUTE_PATH.TEAM} element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
