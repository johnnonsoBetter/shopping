import  React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {ProductsContextProvider} from '../context/ProductsContext'
import ProductList from '../components/product/ProductList'


export default function Products() {
  
  const [products, setProducts] = useState([])
  const [massDeleteProducts, setMassDeleteProducts] = useState([])
  
  const massDelete = () => {
    
    const lastestProductsListing = []
    products.forEach(product => {
      if(!massDeleteProducts.includes(product.id))
      lastestProductsListing.push(product)
    })
    
    setProducts(lastestProductsListing)
    setMassDeleteProducts([])
  }
  
  useEffect(() => {
    
    const newProducts = [{
      sku: '9ufhksfl',
      id: 36384,
      name: "Indomie",
      price: '900',
      type: 'DVD',
      size: 500
    }, 
    {sku: '2jfhsdfk',
    id: 3922, name: "Copper Rice", price: '500',
      type: 'Furniture',
      height: 32,
      width: 24,
      length: 90
    },
    {sku: '3dhifd',id: 212, name: "Learning", price: '1000',
      type: 'Book',
      weight: 45
    }]
    setProducts(newProducts)
    
    
    return () => {
      setProducts([])
      setMassDeleteProducts([])
    }
    
  }, [])
  
  
  
  
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      
      <ProductsContextProvider
      value={{
        products,
        massDeleteProducts,
        setMassDeleteProducts,
      }}
      
      >
        <AppBar sx={{background: 'white'}}
          
        >
          <Toolbar
            sx={{display: 'flex', alignItems: 'center'}}
          >
          
            <Typography variant='h5' 
              fontWeight={700}
              width='100%' sx={{color: 'black' }} >
              Product Listing
            
            </Typography>
            <Box width='100%'
             sx={{display: 'flex',
               justifyContent: 'flex-end'
             }}
            
            >
              <Link to='/add_product' 
                style={{textDecoration: 'none'}}
              >
                <Button size='small' variant='contained'
                  sx={{mx: 3}}
                > 
                Add Product 
               </Button>
              
              </Link>
           
              
              <Button size='small' variant='contained'
                onClick={massDelete}
                disabled={massDeleteProducts.length === 0 ? true : false}
              color='error' >
                Mass Delete
              </Button>
            
            </Box>
            
          </Toolbar>
        </AppBar>
      
      <Toolbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <ProductList />
        </Box>
      </Container>
      
      </ProductsContextProvider>
    </React.Fragment>
  );
}
