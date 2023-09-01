import { useCallback, useEffect, useState } from 'react';
import { ERROR_MESSAGE, STATUS } from '../constants';
import { OctokitResponse } from '@octokit/types';
import { RequestError } from '@octokit/request-error';

type status = keyof typeof STATUS;

interface Icallback<R> {
  callback?: () => Promise<OctokitResponse<R>>;
}

const useOctokit = <R>(callback?: () => Promise<OctokitResponse<R>>) => {
  const [data, setData] = useState<R>();
  const [status, setStatus] = useState<status>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const requestOctokit = useCallback(
    async ({ callback }: Icallback<R>) => {
      try {
        if (!callback) return;

        setStatus(STATUS.LOADING);

        const res = await callback();

        if (res.data) {
          const { data } = res;
          setData(data);
        }

        setStatus(STATUS.SUCCESS);
      } catch (error) {
        setStatus(STATUS.ERROR);
        if (error instanceof RequestError) {
          if (error.status === 404 || error.status === 422) {
            setErrorMessage(ERROR_MESSAGE.USER[error.status]);
            console.error(ERROR_MESSAGE.DEV[error.status]);
          }
        } else {
          // 500 에러 혹은 알 수 없는 에러
          setErrorMessage(ERROR_MESSAGE.USER.default);
          console.error(ERROR_MESSAGE.DEV.default);
        }
      }
    },
    [callback],
  );

  useEffect(() => {
    requestOctokit({ callback });
  }, []);

  return { data, status, errorMessage, requestOctokit };
};

export default useOctokit;
