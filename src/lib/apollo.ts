import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient( {
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nw6g030urv01xo3vugejaq/master',
    cache: new InMemoryCache()
} );