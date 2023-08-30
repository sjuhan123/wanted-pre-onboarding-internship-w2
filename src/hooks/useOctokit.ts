/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../constants';
import { Octokit } from 'octokit';
import { RequestParameters, OctokitResponse } from '@octokit/types';

type status = 'idle' | 'loading' | 'error' | 'success';

const useOctokit = <T>(endpoint?: string, body?: RequestParameters, isGetData?: boolean) => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<status>('idle');

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

      setStatus('loading');

      const res: OctokitResponse<T> = await oktokit.request(endpoint, body);

      if (isGetData) {
        const { data } = res;
        setData(data);
      }

      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);

      // if (!res.ok) {
      //   throw new Error(ERROR_MESSAGE.default);
      // }

      setStatus('success');
    } catch (error) {
      if (error instanceof Error) {
        setStatus('error');
      }
    }
  };

  useEffect(() => {
    requestOctokit({ endpoint, body, isGetData });
  }, []);

  return { data, status, requestOctokit };
};

export default useOctokit;
