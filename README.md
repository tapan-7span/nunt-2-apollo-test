# nuxt2-apollo Demo Project

For GQL
Testing Server using Nuxt 2 & Apollo GQL to change the type of API request POST to GET & sending data in params.


## Conclusion

Apollo Client, which is a popular GraphQL client library for JavaScript and React applications, primarily focuses on sending GraphQL queries and mutations using POST requests with the query in the request body. This is the standard and recommended way of working with GraphQL.

While Apollo Client is designed for sending queries and mutations via POST requests, it does provide some options for customizing the request, including headers and other configuration options. However, natively, it doesn't provide direct support for sending GraphQL queries in the URL as GET parameters.

If you want to send GraphQL queries as GET requests with parameters in the URL, you may need to handle this manually as shown in the previous example. You can construct the URL with the query as a URL parameter and then use Apollo Client's HTTP Link to send the GET request.