const config = {
  httpEndpoint: "",//put endpoint here
  httpLinkOptions: {
    credentials: "include",
    fetchOptions: {
      // Uncomment this to make a GET Request , but it would not work while sending details in body
      // GET Request allows pass data in params not on body
      
      // method: 'GET',
    },
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
