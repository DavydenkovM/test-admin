import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostList } from './posts';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

const App = () => (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
          <Resource name="posts" list={PostList} />
      </Admin>
  );

export default App;

