import { useState } from 'react';
import {Container, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';

function App() {

  return (
    <NoticiasProvider>    
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h4">
            Buscador de Noticias
          </Typography>
        </header>   
      
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Formulario/>
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}

export default App
