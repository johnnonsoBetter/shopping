import React, {useContext} from 'react' 
import {Paper, Box, Checkbox, Typography} from '@mui/material'
import ProductsContext from '../../context/ProductsContext'


export default function Product(props) {
  
  const [checked, setChecked] = React.useState(false);
  
  const {massDeleteProducts, setMassDeleteProducts} = useContext(ProductsContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if(event.target.checked){
      
      setMassDeleteProducts(
        massDeleteProducts.concat(id)
      )
    }else{
      setMassDeleteProducts(
        massDeleteProducts.filter(massDeleteProductId => massDeleteProductId !== id )
      )
    }
  };
  
  const {name, id,price, sku, type, typeValue, size, weight,  height, width, length} = props.product
  
  
  return (
    <Box>
      <Paper
        sx={{
          width: '100%',
          p: 1
        }}
      >
      
        <Box >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            className='delete-checkbox'
          />
            
             <Typography fontWeight={700} ml={1} variant='h6' >
              {sku}
            </Typography>
            
             <Typography fontWeight={700} ml={1} my={1} variant='h6' >
              {name}
            </Typography>
            
              <Typography fontWeight={700} ml={1} my={1} variant='h6' >
              ${price}
            </Typography>
            
            <Box >
              
              {
                type === 'Book' ? 
                    <Typography fontWeight={700} ml={1} my={1} variant='h6' >
                      Weight: {weight}KG
                    </Typography>
                : type === 'Furniture' ?
                   <Typography fontWeight={700} ml={1} my={1} variant='h6' >
                      Dimensions:  {height}x{width}x{length}
                    </Typography>
                : type === 'DVD' ?
                   <Typography fontWeight={700} ml={1} my={1} variant='h6' >
                      Size: {size}MB
                    </Typography>
                : null
              }
            
            </Box>
        </Box>
        
     
    
      </Paper>
      
    </Box>
  )
}