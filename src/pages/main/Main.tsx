import React, { ChangeEvent, useEffect, useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import Button from '../../components/main/button/Button';
import * as S from './style';
import useOctokit from '../../hooks/useOctokit';
import Spinner from '../../components/common/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useRepoContext } from '../../context/RepoContext';
import { IRepoResponse } from '../../types/repo';
import { STATUS, URL } from '../../constants';

export default function Main() {
  const navigate = useNavigate();
  const { data, status, requestOctokit } = useOctokit<IRepoResponse>();
  const { dispatch } = useRepoContext();
  const [values, setValues] = useState({ organization: '', repository: '' });

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateRepo = () => {
    requestOctokit({
      endpoint: `GET /repos/${values.organization}/${values.repository}`,
      body: {
        owner: values.organization,
        repo: values.repository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
      isGetData: true,
    });
  };

  useEffect(() => {
    if (data && status === STATUS.SUCCESS) {
      const repoInfo = {
        organization: data.owner.login,
        repository: data.name,
      };

      dispatch({ type: 'SET_REPO', payload: repoInfo });
      navigate(URL.Issues);
    }
  }, [data, status]);

  return (
    <Layout title='Issues'>
      <S.MainBox>
        <input
          type='text'
          placeholder='organization'
          name='organization'
          onChange={setInputValue}
        />
        <input type='text' placeholder='repository' name='repository' onChange={setInputValue} />
        <Button
          buttonContent={status === STATUS.LOADING ? <Spinner type='button' /> : '이슈 보러가기'}
          type='primary'
          onClick={validateRepo}
        />
        {status === STATUS.ERROR && <S.AlertNotice>존재하지 않는 레포지토리입니다.</S.AlertNotice>}
      </S.MainBox>
    </Layout>
  );
}
