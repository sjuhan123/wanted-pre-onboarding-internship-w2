import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueDetail from './pages/IssueDetail';
import Issues from './pages/Issues';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/issues' element={<Issues />} />
        <Route path='/issues/:id' element={<IssueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
