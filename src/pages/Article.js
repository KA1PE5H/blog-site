import React from 'react';
import {useParams} from "react-router-dom";
import articleContent from "../pages/article-content"
const Article = () => {
    const { name } = useParams();
    const article = articleContent.find((article) => {
        if(article.name===name){
            return article;
        }
    });
    if(!article) {
        return (
            <>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900 text-center'>
                Article doesn't exist.
            </h1>
            </>
        )
    }
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
                {article && article.title}
            </h1>
            {article && article.content.map((paragraph, index)=> {
                return (<p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>);
            })}
        </>
    );
};
 
export default Article;