import { ApolloServer } from 'apollo-server';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';
import { UsersApi } from './graphql/user/datasources';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
