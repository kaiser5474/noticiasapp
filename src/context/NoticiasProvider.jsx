import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState("general");
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticia, setTotalNoticia] = useState(0);
    useEffect(() => {
    //   console.log(categoria);
      const consultarAPI = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
          const {data} = await axios(url);
          setNoticias(data.articles);
          setTotalNoticia(data.totalResults);
        }
        consultarAPI();      
    }, [pagina])
    
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
        setPagina(1);
    }

    const handleChangePagina = (e) => {
        setPagina(Number(e.target.textContent));
    }
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                noticias,
                totalNoticia,
                pagina,
                handleChangeCategoria,
                handleChangePagina,
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext;