import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RepoProvider } from './context/RepoContext';
import IssueDetail from './pages/issueDetail/IssueDetail';
import Issues from './pages/issues/Issues';
import Main from './pages/main/Main';

function App() {
  return (
    <RepoProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/issues/:id' element={<IssueDetail />} />
        </Routes>
      </BrowserRouter>
    </RepoProvider>
  );
}

export default App;
