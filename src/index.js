import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

ReactDOM.render(
  <Router basename="/">
    <ScrollToTop>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
