import React, { createContext, useContext, useState } from 'react';
import { IRepoInfo } from '../types';

interface IRepoContext {
  state: IRepoInfo;
  setRepoInfo: React.Dispatch<React.SetStateAction<IRepoInfo>>;
}

const RepoContext = createContext<IRepoContext | undefined>(undefined);

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [repoInfo, setRepoInfo] = useState<IRepoInfo>({
    organization: '',
    repository: '',
  });

  return (
    <RepoContext.Provider value={{ state: repoInfo, setRepoInfo }}>{children}</RepoContext.Provider>
  );
};

export const useRepoContext = () => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error('Cannot find RepoProvider');
  }

  return context;
};
