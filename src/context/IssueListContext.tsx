import React, { createContext, useReducer } from 'react';
import { ISSUE_LIST } from '../constants';
import { IIssue, TIssueList } from '../types/issue';

interface IssueListContext {
  state: TIssueList;
  dispatch: React.Dispatch<IssueListAction>;
}

const IssueListContext = createContext<IssueListContext | undefined>(undefined);

type IssueListAction =
  | { type: typeof ISSUE_LIST.SET; payload: TIssueList }
  | { type: typeof ISSUE_LIST.ADD; payload: TIssueList }
  | { type: typeof ISSUE_LIST.RESET };

const IssueListReducer = (state: TIssueList, action: IssueListAction): TIssueList => {
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

const initialState: TIssueList = [];

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
