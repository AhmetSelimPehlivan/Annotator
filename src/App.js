import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';
import WelcomePage from './Pages/WelcomePage';

const MainPage = React.lazy(() => import('./Pages/MainPage'));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="timeline" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
