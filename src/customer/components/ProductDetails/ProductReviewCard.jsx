import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                        P
                    </Avatar>
                </Box>
            </Grid>
            <Grid item sx={9}> 
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Prathamesh</p>
                        <p className='opacity-70'>August 11, 2024</p>
                    </div>
                </div>
                <Rating value={4} name='half-rating' readOnly/>
                <p>Nice Product!</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard