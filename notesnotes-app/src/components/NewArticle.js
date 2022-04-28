import React, { useState } from'react';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const NewArticle = () =>{

const url = Global.url;

const  [article, setArticle] = useState({
    title: null,
    content: null,
    author: null,
});

const [redirect, setRedirect] = useState(false);

//Reference to dates of form:
let titleRef = React.createRef();
let contentRef = React.createRef();
let authorRef = React.createRef();

const changeState = () =>{
    setArticle({
        title: titleRef.current.value,
        content: contentRef.current.value,
        author: authorRef.current.value,
    }); 
}

const sendData = (e) => {
     //Evitamos que al recibir los datos se recargue la pantalla:
    e.preventDefault();
    changeState();
    //Petición HTTP por POST para guardar el artículo:
    axios.post(url + 'SAVE', article ).then(res=>{
        setRedirect(true)
        console.log(res.data)
    })
}
    if (redirect) {
        return <Navigate to="articles"/>
    }


    return(
        <div id="forms" className='card mx-auto mb-3 mt-5'  style={{width:'30em'}}>
            <div className="card-header text-dark">
                <h4>Publish New Article</h4>
            </div>
                <form onSubmit={sendData}>
                <div className='mb-3'>
                    <label>Title</label>
                    <input type="text" className="form-control" id="title" name="title" ref={titleRef} onChange={changeState} required />            
                </div>

                <div className='mb-3'>
                    <label>Content</label>
                    <textarea className="form-control" id="content" name='content' rows="6" cols="30" ref={contentRef} onChange={changeState} required/>              
                </div>

                <div className='mb-3'>
                    <label>Author</label>
                    <input type="text" className="form-control" id="author" name="author" ref={authorRef} onChange={changeState} required /> 
                </div>
                <div className='mb-3'>
                    <input className="form-control btn btn-primary" type="submit" id="publish" value="Publish"/> 
                </div>
                
                </form>
                <div className="card-body">

            </div>
                             
            
        </div>
        

    );
} 
export default NewArticle;
