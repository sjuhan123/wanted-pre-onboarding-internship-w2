import React, { createContext, useReducer } from 'react';
import { ISSUE_LIST } from '../constants';
import { IissueList } from '../types/index';

interface IssueListContext {
  state: IissueList;
  dispatch: React.Dispatch<IssueListAction>;
}

const IssueListContext = createContext<IssueListContext | undefined>(undefined);

type IssueListAction =
  | { type: typeof ISSUE_LIST.SET; payload: IissueList }
  | { type: typeof ISSUE_LIST.ADD; payload: IissueList }
  | { type: typeof ISSUE_LIST.RESET };

const IssueListReducer = (state: IissueList, action: IssueListAction): IissueList => {
  switch (action.type) {
    case ISSUE_LIST.SET:
      return action.payload;
    case ISSUE_LIST.ADD:
      return [...state, ...action.payload];
    case ISSUE_LIST.RESET:
      return [];
    default:
      throw new Error('Unhandled action');
  }
};

const initialState: IissueList = [];

export const IssueListProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(IssueListReducer, initialState);

  return (
    <IssueListContext.Provider value={{ state, dispatch }}>{children}</IssueListContext.Provider>
  );
};

export const useIssueListContext = () => {
  const context = React.useContext(IssueListContext);

  if (!context) {
    throw new Error('Cannot find IssueListProvider');
  }

  return context;
};
