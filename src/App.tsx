import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from './constants';
import { RepoProvider } from './context/RepoContext';
import IssueDetail from './pages/issueDetail/IssueDetail';
import Issues from './pages/issues/Issues';
import Main from './pages/main/Main';

function App() {
  return (
    <RepoProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.ISSUES} element={<Issues />} />
          <Route path={PATH.ISSUE_DETAIL} element={<IssueDetail />} />
        </Routes>
      </BrowserRouter>
    </RepoProvider>
  );
}

export default App;
