import React, { createContext, useContext, useReducer } from 'react';
import { IRepoInfo } from '../types';

type IRepoAction = { type: 'SET_REPO'; payload: IRepoInfo } | { type: 'RESET_REPO' };

interface IRepoContext {
  state: IRepoInfo;
  dispatch: React.Dispatch<IRepoAction>;
}

const initialState = {
  organization: '',
  repository: '',
};

const RepoContext = createContext<IRepoContext | undefined>(undefined);

const repoReducer = (state: IRepoInfo, action: IRepoAction) => {
  switch (action.type) {
    case 'SET_REPO':
      return action.payload;
    case 'RESET_REPO':
      return state;
    default:
      throw new Error('Unhandled action');
  }
};

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(repoReducer, initialState);

  return <RepoContext.Provider value={{ state, dispatch }}>{children}</RepoContext.Provider>;
};

export const useRepoContext = () => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error('Cannot find RepoProvider');
  }

  return context;
};
