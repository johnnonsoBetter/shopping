import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material'

import { Route, Switch,Redirect } from 'react-router-dom';
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'
const theme = createTheme({
  typography: {
    fontFamily: [
       'Quicksand', 'sans-serif',
    ].join(','),
  },
});


function App() {
  
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
       
        <Switch >
            
          
            <Route path='/add_product'
            render={() => <CreateProduct />}
            />
            
              <Route path="/" render={() => <Products />} />
            
            <Redirect to='/' />
            
          </Switch>

      </div>
    </ThemeProvider>
    
  );
}




export default App;
