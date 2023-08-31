/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { ERROR_MESSAGE, STATUS } from '../constants';
import { Octokit } from 'octokit';
import { RequestParameters, OctokitResponse } from '@octokit/types';

type status = keyof typeof STATUS;

const useOctokit = <T>(endpoint?: string, body?: RequestParameters, isGetData?: boolean) => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<status>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const oktokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const requestOctokit = async ({
    endpoint,
    body,
    isGetData,
  }: {
    endpoint?: string;
    body?: RequestParameters;
    isGetData?: boolean;
  }) => {
    try {
      if (!endpoint) return;

      setStatus(STATUS.LOADING);

      const res: OctokitResponse<T> = await oktokit.request(endpoint, body);

      if (isGetData) {
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
  };

  useEffect(() => {
    requestOctokit({ endpoint, body, isGetData });
  }, []);

  return { data, status, errorMessage, requestOctokit };
};

export default useOctokit;
