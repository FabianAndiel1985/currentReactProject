import './App.css';
import {Route,Switch} from 'react-router-dom';
import {Landing} from './components/landing/landing.component';
import Display from './components/display/display.component';






function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path="/display" component={Display}/>
      </Switch>
    </div>

  );
}

export default App;
