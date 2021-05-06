import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Router,Link} from '@reach/router';
import SearchParams from './SearchParams';
import Details from "./Details";
import ThemeContext from './ThemeContext';



const App = () => {

  const themeHook = useState("darkblue");

  return (
      // ? React strict mode is a tool that throws errors when using React features that are soon to be deprecated.
      <React.StrictMode>
        
        <ThemeContext.Provider value={themeHook}>
            <div>
              <header>
              <Link to="/" > Adopt Me </Link>
              </header>

                {/* reach router renders the thing that matches the most  */}
                <Router>
                  <SearchParams path="/" /> 
                  {/* <SomeOtherRoute path="/details/:1" /> component would render first 
                    not Details component because of the specific id 
                    Also, order of decoration is not important !!! */}
                  <Details path="/details/:id" />
                </Router>
                
            </div>
        </ThemeContext.Provider>

      </React.StrictMode>


  );
};

ReactDOM.render(<App />, document.getElementById("root"));