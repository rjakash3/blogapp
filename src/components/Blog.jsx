import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4'>
            <h4><i>BLOG FORM</i></h4>
        </Typography>
        <br/>
        <TextField label='Blog Name' variant='filled' /><br/><br/>
        <TextField label='Description' variant='filled'  /><br/><br/>
        <TextField label='Author Name' variant='filled' /><br/><br/>
        <Button variant='contained'color='error' >submit</Button>
    </div>
  )
}

export default Blog