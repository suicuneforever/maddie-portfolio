import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home';
import Layout from './Layout';
import Work from './Work/Work';

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
