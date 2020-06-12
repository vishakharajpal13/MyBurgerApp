import React, { Component } from 'react';

import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

 /*  state={
    show:true
  }

  componentDidMount(){

    setInterval(()=> this.setState({show:false}),5000)
  } */ //this is to show the working on componentwillunmount in error handler page
  render () {
    return (
      <div>
        <Layout>
      <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
