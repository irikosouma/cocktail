import React from 'react'
//style
import {WrapItem} from './index.styles'
export default function ItemDetail({data, onClickBack}) {
    return (
        <WrapItem>
            <button className="btn-click-back" onClick={onClickBack}>Back Home</button>
            <div className="name">{data.strDrink}</div>
            <div className="content-detail">
            <img src={data.strDrinkThumb} alt="image-cocktail-default" className="images-style" />
            <div className="flex-content">
                <div className="wrap-content-detail">
                    <div className="name-detail"><span className="info-item">Name: </span> {data.strDrink}</div>
                    <div className="category-type"><span className="info-item">Category: </span> {data.strCategory}</div>
                    <div className="info"><span className="info-item">Info: </span> {data.strAlcoholic}</div>
                    <div className="glass-type"><span className="info-item">Glass: </span> {data.strGlass}</div>
                    <div className="instruction"><span className="info-item">Instructions: </span> {data.strInstruction}</div>
                    <div className="ingredient"><span className="info-item">Ingredients: </span> {data?.strIngredient1} {data?.strIngredient2} {data?.strIngredient3} {data?.strIngredient4} {data?.strIngredient5} {data?.strIngredient6} {data?.strIngredient7} {data?.strIngredient8}</div>
                </div>

            </div>

            </div>
        </WrapItem>
    )
}
