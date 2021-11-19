import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

// Views
const Home = lazy(() => import('./views/Home'));

function App() {
  return (
    <Suspense fallback={
      <div>
        <h1>Loading...</h1>
      </div>
    }>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
