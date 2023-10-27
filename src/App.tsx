import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
