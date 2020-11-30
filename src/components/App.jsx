import React from "react";
import Dashboard from "./Dashboard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Addposts from "./Addposts";
function App() {
    return (
        <div>
             <Router>
                <Switch>
                    <Route exact path={'/'}  component={Dashboard}/>
                    <Route exact path={'/Addposts'} component={Addposts}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
