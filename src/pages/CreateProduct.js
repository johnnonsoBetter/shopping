import  React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {NewProductContextProvider} from '../context/NewProductContext'

import AddProduct from '../components/product/AddProduct'
import {Link} from 'react-router-dom'

export default function CreateProduct() {
  
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [weight, setWeight] = useState(0)
  const [size, setSize] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  
  const resetProductTypeValues = () => {
    setLength(0)
    setWidth(0)
    setHeight(0)
    setSize(0)
    setWeight(0)
  }
  const handleFormChange = (e) => {
    // handles the form changes.
    e.preventDefault()
    
    const value = e.target.value 
    const name = e.target.name 
  
    switch (name) {
      case 'sku':
        setSku(value)
      break;
      case 'sku':
        setSku(value)
      break;
      case 'sku':
        setSku(value)
      break;
      case 'name':
        setName(value)
      break;
      case 'price':
        setPrice(value)
      break;
      case 'size':
        setSize(value)
      break;
      case 'weight':
        setWeight(value)
      break;
      case 'height':
        setHeight(value)
      break;
      case 'width':
        setWidth(value)
      break;
      case 'length':
        setLength(value)
      break;
      
      default:
        
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  
  
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      
      < NewProductContextProvider
        value={{
          name,
          sku,
          price,
          weight,
          size,
          height,
          width,
          length,
          handleFormChange,
          resetProductTypeValues,
         }}
      
      >
        <Box 
          component="form"
          validate
          autoComplete="off"
        >
        <AppBar sx={{background: 'white'}}
          
        >
          <Toolbar
            sx={{display: 'flex', alignItems: 'center'}}
          >
          
            <Typography variant='h5' 
              fontWeight={700}
              width='100%' sx={{color: 'black' }} >
              Product Add
            
            </Typography>
            <Box width='100%'
             sx={{display: 'flex',
               justifyContent: 'flex-end'
             }}
            
            >

                <Button size='small' variant='contained'
                  sx={{mx: 3}}
                  type='submit'
                > 
                Save 
               </Button>
              
              
           
              <Link to='/' 
                style={{
                  textDecoration: 'none'
                }}
              >
              <Button size='small' variant='contained'
                color='error' >
                Cancel
              </Button>
              </Link>
            
            </Box>
            
          </Toolbar>
        </AppBar>
      
      <Toolbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <AddProduct />
        </Box>
      </Container>
      
      </Box>
      
      </NewProductContextProvider>
    </React.Fragment>
  );
}
