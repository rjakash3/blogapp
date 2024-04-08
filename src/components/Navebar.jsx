import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <AppBar color='warning' >
            <Toolbar>
            <Typography variant='h3' style={{ paddingLeft:"500px"}}>BLOG APP
            </Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success' size='small' style={{marginLeft:'200px'}} ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>HOME</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='error' size='small'><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>ADD BLOG</Link> </Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navebar