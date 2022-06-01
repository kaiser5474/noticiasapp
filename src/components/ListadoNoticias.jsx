import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {
    const {noticias, totalNoticia, handleChangePagina, pagina} = useNoticias();
    console.log(totalNoticia);
    const totalPagina = Math.ceil(totalNoticia/20);
    console.log(totalPagina);
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Ultimas noticias
        </Typography>
        <Grid container spacing={2}>
            {noticias.map(noticia => <Noticia key={noticia.url} noticia={noticia}/>)}            
        </Grid>
        <Stack spacing={2} alignItems="center" justifyContent="center" marginY={5}>            
            <Pagination count={totalPagina} color="primary" onChange={handleChangePagina} page={pagina}/>            
        </Stack>
    </>
  )
}

export default ListadoNoticias