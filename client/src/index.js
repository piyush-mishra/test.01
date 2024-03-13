import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './components/redux/cart/cartStore';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { getTotal } from './components/redux/cart/cartSlice';



const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:"http://localhost:4503/api/graphql"
});

store.dispatch(getTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
    <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
