/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from 'react';
import { ERROR_MESSAGE, STATUS } from '../constants';
import {} from 'octokit';
import { OctokitResponse } from '@octokit/types';

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
        if (error instanceof Error) {
          if (error.message === 'Not Found') {
            setStatus(STATUS.ERROR);
            setErrorMessage(ERROR_MESSAGE.USER[404]);
            console.error(ERROR_MESSAGE.DEV[404]);
          }
          if (error.message === 'Unprocessable Entity') {
            setStatus(STATUS.ERROR);
            setErrorMessage(ERROR_MESSAGE.USER[422]);
            console.error(ERROR_MESSAGE.DEV[422]);
          }
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
