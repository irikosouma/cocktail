import React from 'react'
//style
import {WrapItem} from './index.styles'
export default function Item({data, onClickShowDetail}) {
    return (
        <WrapItem>
            <img src={data.strDrinkThumb} alt="image-cocktail-default" className="images-style" />
            <div className="wrap-content">
                <div className="name">{data.strDrink}</div>
                <div className="glass-type">{data.strGlass}</div>
                <div className="info">{data.strAlcoholic}</div>
                <button className="btn-show-detail" onClick={onClickShowDetail}>Details</button>
            </div>
        </WrapItem>
    )
}
