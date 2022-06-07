import React, {useContext} from 'react'
import ProductsContext from '../../context/ProductsContext'
import {Grid} from '@mui/material'
import Product from './Product'

export default function ProductList() {
  
  const {products} = useContext(ProductsContext)
  
  return (
    <Grid container spacing={2} >
      {
        products.map(product => {
          const {id, name} = product
          
          return (
            <Grid item key={id} xs={12} sm={3} md={4} >
              
              <Product product={product} />
            </Grid>
          )
        })
      }
    </Grid>
    )
}