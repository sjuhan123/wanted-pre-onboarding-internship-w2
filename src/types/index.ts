export interface Iuser {
  avatar_url?: string;
  login: string;
}

export interface IissueSummary {
  number: number;
  title: string;
  user: Iuser;
  created_at: string;
  comments: number;
  id: number;
}

export type IissueList = IissueSummary[];

export interface IissueDetail extends IissueSummary {
  body: string;
}

export interface IrepoInfo {
  owner: string;
  repo: string;
}

export interface IrepoResponse {
  name: string;
  owner: {
    login: string;
  };
}
