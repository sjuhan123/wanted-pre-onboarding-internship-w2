import React, { createContext, useContext, useState } from 'react';
import { IrepoInfo } from '../types/index';

interface IRepoContext {
  state: IrepoInfo;
  setRepoInfo: React.Dispatch<React.SetStateAction<IrepoInfo>>;
}

const RepoContext = createContext<IRepoContext | undefined>(undefined);

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [repoInfo, setRepoInfo] = useState<IrepoInfo>({
    owner: '',
    repo: '',
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
