const config = {
  httpEndpoint: "https://api.alike.host/graphql",
  httpLinkOptions: {
    credentials: "include",
  },
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
  inMemoryCacheOptions: {
    evict: true,
  },
};

export default {
  clientConfigs: {
    default: config,
  },
  includeNodeModules: true,
//   errorHandler: "~/plugins/apollo-error-handler.js",
};
