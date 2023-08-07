import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import ScrollToTop from 'ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='*' element={<MainLayout />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

  );
}

export default App;