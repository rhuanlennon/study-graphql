const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInpunt = new URLSearchParams(input);
  const response = await getUsers('/?' + apiFiltersInpunt);
  return response.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

const posts = ({ id }, _, { postDataLoader }) => {
  return postDataLoader.load(id);
};
export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
