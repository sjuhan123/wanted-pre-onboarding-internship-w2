import { octokitInstance } from './instance';
import { OctokitResponse } from '@octokit/types';
import { IrepoResponse, IissueList, IissueDetail } from '../types/index';

const baseURL = `/repos`;

export const getRepo = async (
  owner: string,
  repo: string,
): Promise<OctokitResponse<IrepoResponse>> => {
  const res = await octokitInstance.request(`GET ${baseURL}/${owner}/${repo}`);
  return res;
};

export const getRepoIssueList = async (
  owner: string,
  repo: string,
  page: number,
): Promise<OctokitResponse<IissueList>> => {
  const res = await octokitInstance.request(`GET ${baseURL}/${owner}/${repo}/issues`, {
    state: 'open',
    sort: 'comments',
    page: page,
  });
  return res;
};

export const getIssueDetail = async (
  owner: string,
  repo: string,
  issueNumber: number,
): Promise<OctokitResponse<IissueDetail>> => {
  const res = await octokitInstance.request(
    `GET ${baseURL}/${owner}/${repo}/issues/${issueNumber}`,
  );
  return res;
};
