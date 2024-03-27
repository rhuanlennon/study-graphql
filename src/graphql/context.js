import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';

// const API_URL = process.env.API_URL;
const _getUsers = getUsers(fetch);
const _getPosts = getPosts(fetch);

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(_getUsers),
    getUsers: _getUsers,
    getPosts: _getPosts,
  };
};
