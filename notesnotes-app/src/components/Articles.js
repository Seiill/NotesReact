import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from '../Global';
import Article from './Article'


const Articles = () => {
    const [articles, setArticles] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getArticles();},[articles.length]);
//En esta consulta obtenemos todos  los artículos:
    const getArticles = () =>{
        axios.get(url+'articles').then(res=>{
            setArticles(res.data.articles)
        })
    }
//En esta consulta Eliminamos un artículo a traves de su id:  
    const deleteArticle = (id) =>{
        const idArticle = articles[id]._id;
        axios.delete(url + 'delete/' + idArticle).then(res=>{
            getArticles();
        });
    }

    return(
        <div className="publicaciones">
            <h1 className="mt-5">Artículos</h1>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2" >
                    {
                        articles.length > 0 ? (
                            articles.map((article, i)=>{
                                return(
                                    <Article
                                    key={i}
                                    id={i}
                                    article={article}
                                    deleteArticle={deleteArticle}
                                    />
                                )
                            })
                        ):(
                            <h3 className="mx-auto">No hay artículos que mostrar</h3>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
    export default Articles;