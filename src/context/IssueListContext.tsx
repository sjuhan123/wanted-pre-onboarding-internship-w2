import React, { createContext, useReducer } from 'react';
import { IIssue, TIssueList } from '../types/issue';

interface IssueListContext {
  state: TIssueList;
  dispatch: React.Dispatch<IssueListAction>;
}

const IssueListContext = createContext<IssueListContext | undefined>(undefined);

type IssueListAction =
  | { type: 'SET_ISSUE_LIST'; payload: TIssueList }
  | { type: 'ADD_ISSUE'; payload: IIssue }
  | { type: 'RESET_ISSUE_LIST' };

const IssueListReducer = (state: TIssueList, action: IssueListAction): TIssueList => {
  switch (action.type) {
    case 'SET_ISSUE_LIST':
      return action.payload;
    case 'ADD_ISSUE':
      return [...state, action.payload];
    case 'RESET_ISSUE_LIST':
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
