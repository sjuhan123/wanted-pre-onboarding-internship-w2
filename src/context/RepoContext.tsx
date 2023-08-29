import React, { createContext, useContext } from 'react';
import { IRepo } from '../types';

type IRepoAction = { type: 'SET_REPO'; payload: IRepo } | { type: 'RESET_REPO' };

interface IRepoContext {
  state: IRepo;
  dispatch: React.Dispatch<IRepoAction>;
}

const initialState = {
  organization: '',
  repository: '',
};

const RepoContext = createContext<IRepoContext | undefined>(undefined);

const repoReducer = (state: IRepo, action: IRepoAction) => {
  switch (action.type) {
    case 'SET_REPO':
      return action.payload;
    case 'RESET_REPO':
      return initialState;
    default:
      throw new Error('Unhandled action');
  }
};

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(repoReducer, initialState);

  return <RepoContext.Provider value={{ state, dispatch }}>{children}</RepoContext.Provider>;
};

export const useRepoContext = () => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error('Cannot find RepoProvider');
  }

  return context;
};
