import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

// Views
const Home = lazy(() => import('./views/Home'));

// layouts
const MainLayout = lazy(() => import('./components/layouts/MainLayout'))


function App() {
  return (
    <Suspense fallback={
      <div>
        <h1>Loading...</h1>
      </div>
    }>
      <Routes>
        <Route exact path='/' element={<MainLayout><Home/></MainLayout>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
