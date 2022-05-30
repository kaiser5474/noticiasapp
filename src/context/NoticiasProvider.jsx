import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState("general");
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticia, setTotalNoticia] = useState(0);
    useEffect(() => {
      console.log(categoria);
      const consultarAPI = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
          const {data} = await axios(url);
          setNoticias(data.articles);
          setTotalNoticia(data.totalResults);
          console.log(data)
        }
        consultarAPI();      
    }, [categoria])
    
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                noticias,
                totalNoticia,
                handleChangeCategoria,
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