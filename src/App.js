import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Loading from './components/subComponants/Loading';
import { lazy, Suspense } from 'react';

const Landing = lazy(() => import('./components/Landing'));
const UserDetails = lazy(() => import('./components/userDetails'));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading/>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path='/userDetails' element={<UserDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
