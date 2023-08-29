export const URL = {
  Main: '/',
  Issues: '/issues',
  IssueDetail: '/issues/:id',
} as const;

export const ERROR_MESSAGE = {
  400: '잘못된 요청 형식으로 서버에서 해당 작업을 수행할 수 없습니다.',
  404: '요청받은 페이지를 찾을 수 없습니다.',
  default: '서버 오류가 발생했습니다. 해당 오류가 지속적으로 발생한다면 관리자에게 문의해주세요.',
} as const;
