import React from 'react';

import Search from '../components/Search';

import '../styles/Home.css';

function Home(props) {
  return (
    <div className="Home">
      <Search items={['Rob', 'Jess', 'Bill']}/>
    </div>
  );
}

export default Home;