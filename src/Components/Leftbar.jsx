import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Message, Group } from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

export const Leftbar = () => {
  return (
    <Box 
    flex={3} 
    p={2}>
    
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqnsX53rD5AhV_kWoFHT0GAFwQFnoECAMQAQ&url=https%3A%2F%2Fwww.pornhub.com%2Fvideo%2Fsearch%3Fsearch%3Dgoogle&usg=AOvVaw2DU7HWB2dPmqd_cM4Mi2fY">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiIgOCg37D5AhVvFkwKHZKsB18YABAAGgJvYQ&ohost=www.google.com&cid=CAASJeRoaYOr32HQYhA-b-zldpsTcGL1HumCm6PbFdiyuw-2mmVPLFc&sig=AOD64_1yOP5rkRSuAQSL9x_qU6eLs_-5KA&q&adurl&ved=2ahUKEwjA49Og37D5AhUnmGoFHQftDFwQ0Qx6BAgDEAE'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiJ26Gp37D5AhWabm8EHecLCs8YABAAGgJqZg&ohost=www.google.com&cid=CAASJeRoPSVlV1WrawhEDwscwm1Sq04Lh97jpPF6hBtFR2x4mw6MwKM&sig=AOD64_1LR7TYecMFTqGchxE0LCQ5pZEK8A&q&adurl&ved=2ahUKEwil6pip37D5AhWUl2oFHdIrCDIQ0Qx6BAgDEAE'>
              <ListItemIcon>
                <Message/>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiM_rrB37D5AhUIam8EHSCtAFUYABAAGgJqZg&ohost=www.google.com&cid=CAASJeRoO706M-8EBa_ll71Lx5PSqVogWKnKIIJz8yj7EN-20M3W0u4&sig=AOD64_25inyrxdIeeMKb104wxBfAv4Nbvw&q&adurl&ved=2ahUKEwiX3LHB37D5AhXKkGoFHeKYB7MQ0Qx6BAgDEAE'>
              <ListItemIcon>
                <NotificationsActiveIcon/>
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjI4PHW37D5AhUJJ0wKHT4uBp0YABABGgJvYQ&ohost=www.google.com&cid=CAASJeRodfGsNJMtSserVwL2fvIZWb4uRUoYNuGRnFf1jAVAWoHBaUQ&sig=AOD64_2o8FPH9oIs0nhdqm4j2Q9IX_2l5w&q&adurl&ved=2ahUKEwji9-jW37D5AhV4lmoFHV5uDcIQ0Qx6BAgGEAE'>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

    </List>


    </Box>
  )
}
export default Leftbar