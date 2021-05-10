import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import MainPage from "./MainPage"


const Routing = () => {
     return(
          <BrowserRouter>
          
            <Switch>
                 <Route path="/" exact component={MainPage} />
                 {/* <Route */}
            </Switch>
          </BrowserRouter>
     )
}

export default Routing