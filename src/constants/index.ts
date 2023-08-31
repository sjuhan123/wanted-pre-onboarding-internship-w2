export const ISSUE_LIST = {
  SET: 'SET_ISSUE_LIST',
  ADD: 'ADD_ISSUE_LIST',
  RESET: 'RESET_ISSUE_LIST',
} as const;

export const STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

export const URL = {
  Main: '/',
  Issues: '/issues',
  IssueDetail: '/issues/:id',
} as const;

export const ERROR_MESSAGE = {
  USER: {
    404: '요청받은 페이지를 찾을 수 없습니다.',
    422: '잘못된 요청 형식으로 서버에서 해당 작업을 수행할 수 없습니다.',
    default: '서버 오류가 발생했습니다. 해당 오류가 지속적으로 발생한다면 관리자에게 문의해주세요.',
  },
  DEV: {
    404: 'Github API 에러메시지: Resource not found\n 참고: https://docs.github.com/ko/rest/issues/issues?apiVersion=2022-11-28',
    422: 'Github API 에러메시지: Validation failed, or the endpoint has been spammed.\n 참고: https://docs.github.com/ko/rest/issues/issues?apiVersion=2022-11-28',
    default: '서버 오류가 발생했습니다. 해당 오류가 지속적으로 발생한다면 관리자에게 문의해주세요.',
  },
} as const;
