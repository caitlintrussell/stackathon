
const {ApolloClient} = require('apollo-client');
const {HttpLink} = require('apollo-link-http');
const { setContext } = require('apollo-link-context');
const { InMemoryCache } = require('apollo-cache-inmemory');
// const fetch = require('node-fetch');
const { YELP_API_KEY, AUTH_URL_PATH } = require('../yelp-login');

const morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

const httpLink = new HttpLink({ uri: AUTH_URL_PATH, fetch: fetch });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      authorization: `Bearer ${YELP_API_KEY}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


export default client;
