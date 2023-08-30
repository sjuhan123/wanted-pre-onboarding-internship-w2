import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './constants';
import { IssueListProvider } from './context/IssueListContext';
import { RepoProvider } from './context/RepoContext';
import IssueDetail from './pages/issueDetail/IssueDetail';
import Issues from './pages/issues/Issues';
import Main from './pages/main/Main';

function App() {
  return (
    <RepoProvider>
      <BrowserRouter>
        <Routes>
          <Route path={URL.Main} element={<Main />} />
          <Route
            path={URL.Issues}
            element={
              <IssueListProvider>
                <Issues />
              </IssueListProvider>
            }
          />
          <Route path={URL.IssueDetail} element={<IssueDetail />} />
        </Routes>
      </BrowserRouter>
    </RepoProvider>
  );
}

export default App;
