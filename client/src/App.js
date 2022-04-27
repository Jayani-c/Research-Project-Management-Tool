import React from 'react';

import chat from './components/chat/chat';
import evaluation from './components/evaluation/evaluation';
import feedback from './components/feedback/feedback';
import {AppBar, Container, Grid, Grow, Typography} from "@mui/material";



const App = () => {
    return (
       <Container maxidth="lg">
           <AppBar position="static" color="inherit">
               <Typography varaint="h2" align="center">Chat</Typography>
               {/*<img src={chatimg} alt="chat" height="60" />*/}
           </AppBar>
           <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                           <chat />
                           <evaluation />
                           <feedback />

                       </Grid>
                       <Grid item xs={12} sm={4}>
                           <evaluation />
                       </Grid>
                   </Grid>
               </Container>
           </Grow>
       </Container>
    );
}
export default App;