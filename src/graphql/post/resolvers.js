const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInpunt = new URLSearchParams(input);
  const response = await getPosts('/?' + apiFiltersInpunt);
  return response.json();
};

export const postResolvers = {
  Query: { post, posts },
};
