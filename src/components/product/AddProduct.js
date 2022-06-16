import React, {useContext, useEffect} from 'react';
import {Grid, Box, InputAdornment, TextField, MenuItem} from '@mui/material';
import NewProductContext from '../../context/NewProductContext'


const productTypes = [
  {
    type: 'DVD'
  },
  {
    type: 'Furniture'
  },
  {
    type: 'Book'
  }
];

export default function AddProduct() {
  
  const [productType, setProductType] = React.useState('Book');
  const {
    name, sku, price, size, weight, height, width, length, handleFormChange, resetProductTypeValues
  } = useContext(NewProductContext)

  const handleChange = (event) => {
    setProductType(event.target.value);
  };
  
  useEffect(() => {
    
    resetProductTypeValues()
  }, [productType])
  
  
  return (

      <Grid container >
        <Grid item xs={12} sm={4} >
              <Box
                
            >
            
            
            <Box my={1}>
              <TextField
                id="sku"
                label="Sku"
                name='sku'
                value={sku}
                required
                type='text'
                sx={{my: 1}}       
                fullWidth
                onChange={handleFormChange}
              />
        
            </Box>
            
            
            <Box my={1}>
              <TextField
                id="name"
                label="Name"
                value={name}
                required
                name='name'
                type='text'
                sx={{my: 1}}    
                fullWidth
                onChange={handleFormChange}
              />
            </Box>
            
                 <Box my={1}>
                  <TextField
                    id="price"
                    label="Price"
                    required
                    name='price'
                    value={price}
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    min={1}
                    error={price <= 0}
                    onChange
                    ={handleFormChange}
                  />
                </Box>
                
                
            <Box >
        
        <TextField
          id="productType"
          select
          
          label="Product Type"
          value={productType}
          onChange={handleChange}
          helperText="Please select product type"
          sx={{my: 1}}    
                    fullWidth
        >
          {productTypes.map((option) => (
            <MenuItem key={option.type} value={option.type}>
              {option.type}
            </MenuItem>
          ))}
        </TextField>
        </Box>
            
            
            
        {
          productType === 'Book' ?
                <Box my={1}>
                  <TextField
                    id="weight"
                    label="weight"
                    required
                    min={1}
                    value={weight}
                    name='weight'
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    error={weight <= 0}
                    onChange={handleFormChange}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
                  />
                </Box>
          : productType === 'DVD' ?
                <Box my={1}>
                  <TextField
                    id="size"
                    value={size}
                    min={1}
                    label="size"
                    required
                    onChange={handleFormChange}
                    name='size'
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    error={size <= 0}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">Mb</InputAdornment>,
                  }}
                  />
                </Box>
          : productType === 'Furniture' ?
          <Box >
               <Box my={1}>
                  <TextField
                    id="height"
                    value={height}
                    label="height"
                    required
                    min={1}
                    onChange={handleFormChange}
                    name='height'
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    error={height <= 0}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">H</InputAdornment>,
                  }}
                  />
                </Box>
                
                  <Box my={1}>
                  <TextField
                    id="width"
                    value={width}
                    label="width"
                    min={1}
                    required
                    onChange={handleFormChange}
                    name='width'
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    error={width <= 0}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">W</InputAdornment>,
                  }}
                  />
                </Box>
                
                  <Box my={1}>
                  <TextField
                    id="length"
                    value={length}
                    label="length"
                    min={1}
                    error={length <= 0}
                    required
                    onChange={handleFormChange}
                    name='length'
                    type='number'
                    sx={{my: 1}}    
                    fullWidth
                    InputProps={{
                    startAdornment: <InputAdornment position="start">L</InputAdornment>,
                  }}
                  />
                </Box>
          
          
          </Box>
          : null
        }    
            
            
        </Box>
  
        </Grid>
      
      </Grid>
  
  );
}


