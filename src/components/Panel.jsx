import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Panel = () => {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Typography>6</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>6</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Panel