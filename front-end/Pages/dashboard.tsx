import GoogleIcon from '@mui/icons-material/Google'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import minimum from '../components/Themes/minimum.module.scss'
import baseClasses from './layout.module.scss'

const Dashboard: FunctionComponent = (props: any) => {
  const classes = baseClasses
  const theme = minimum

  // Theme selection

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <Sidebar color="Greens" open={true}>
          <NavLink exact to="/" key="hKTgGSbf">
            <ListItem button className={classes.itemLink}>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
        </Sidebar>
        <div className={theme.mainarea}>
          <div>
            <Button
              variant="outlined"
              color="inherit"
              onClickCapture={(e) => {
                href = 'https://google.com'
              }}
              startIcon={<GoogleIcon />}
            >
              Ir a Google
            </Button>
          </div>

          <div className={classes.bigHello}>
            <Button variant="contained" color="primary" startIcon={<GoogleIcon />}></Button>

            <Typography variant="h1">Hola Mundo</Typography>

            <Typography variant="body1">I'm your Aptugo application</Typography>

            <span>(you can edit me at the Page Manager)</span>
          </div>

          <Grid item>
            <Typography variant=""></Typography>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
