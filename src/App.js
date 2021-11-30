import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

// Views
const Home = lazy(() => import('./views/Home'));
const Destination = lazy(() => import('./views/Destination'));
const Crew = lazy(() => import('./views/Crew'));
const Technology = lazy(() => import('./views/Technology'));

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
        <Route exact path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route exact path='/destination' element={<MainLayout><Destination /></MainLayout>} />
        <Route exact path='/crew' element={<MainLayout><Crew /></MainLayout>} />
        <Route exact path='/tech' element={<MainLayout><Technology /></MainLayout>} />
      </Routes>
    </Suspense>
  );
}

export default App;
