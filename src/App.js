import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import { BrowserRouter, Route } from 'react-router-dom';
import ApplicationList from './components/ApplicationList';
function App(props){
  return(
    <BrowserRouter>
      <div>
        <h2>Your Job Application</h2>
        <Route path="/" component={ApplicationForm} exact={true}></Route>
        <Route path="/admin" component={ApplicationList} exact={true}></Route>
      </div>
    </BrowserRouter>
    
  )
}
export default App;
