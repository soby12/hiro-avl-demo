import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button style={{marginTop:'30px'}}>
      <ListItemIcon>
        <DashboardIcon style={{color:'black'}}  fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={{color:'black',fontSize:'30px !important',fontFamily: 'Josefin Sans, sans-serif',}} fontSize='30px'/>
    </ListItem>
    <ListItem button style={{marginTop:'30px'}}>
      <ListItemIcon>
        <ShoppingCartIcon style={{color:'black'}}   fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Orders" style={{color:'black'}} />
    </ListItem>
    <ListItem button style={{marginTop:'30px'}}>
      <ListItemIcon>
        <PeopleIcon style={{color:'black'}}  fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Customers" style={{color:'black'}} />
    </ListItem>
    <ListItem button style={{marginTop:'30px'}}>
      <ListItemIcon>
        <BarChartIcon style={{color:'black'}}  fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Reports" style={{color:'black'}} />
    </ListItem>
    <ListItem button style={{marginTop:'30px'}}>
      <ListItemIcon>
        <LayersIcon style={{color:'black'}}   fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Integrations" style={{color:'black'}} />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset  style={{color:'white'}}>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" style={{color:'white'}} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" style={{color:'white'}} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" style={{color:'white'}} />
    </ListItem>
  </div>
);