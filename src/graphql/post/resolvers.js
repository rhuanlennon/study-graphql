const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 400,
      message: 'Post not found',
    };
  }
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInpunt = new URLSearchParams(input);
  const response = await getPosts('/?' + apiFiltersInpunt);
  return response.json();
};

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
};
