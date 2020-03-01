import React,{ Component } from 'react';

import { Header } from '../layout/Header';
export class Root extends Component {
  render() {
  return (
   <div className="container-fluid">
        <div class="row">
       <Header/>
       <hr/>
       <div class="col py-2">
            {this.props.children}
        </div>
        </div>
   </div>
  );
  }
}