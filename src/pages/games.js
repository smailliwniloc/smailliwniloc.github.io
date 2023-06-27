import React, {Component} from 'react';
import Layout from '../components/Layout';
import GamesPage from '../games/Games';
  
class Games extends Component {
  render() {
    return (
        <Layout>
            <GamesPage/>
        </Layout>
    )
  } 
};
  
export default Games;