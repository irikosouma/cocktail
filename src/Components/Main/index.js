import React, { useState, useEffect } from 'react'
//styles
import {WrapMain} from './index.styles'
//images
import Logo from '../../assets/images/Logo'
//data
// import data from '../../data/cocktail'
//component
import Item from '../Item'
import ItemDetail from '../ItemDetail'
export default function Main() {
    const [list, setList] = useState([])
    const [inputState, setInputState] = useState("")
    const [isActive, setIsActive] = useState(true)
    const [isDetail, setIsDetail] = useState(false)
    const [urlApi, setUrlApi] = useState('a')
    const [itemSelected, setItemSelected] = useState(0)
    const handleChange = (e) => {
        const newVal = e.target.value;
        setInputState(newVal)
        setUrlApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newVal}`)
    }
    useEffect(() => {
        let url_Api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`
        fetch(url_Api)
        .then(response => response.json()) 
        .then(json => {
            setList(json.drinks)
        })  
        .catch(err => console.log('Request Failed', err)); 
        }, []);
    useEffect(() => {
        setUrlApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputState}`)
        fetch(urlApi)
        .then(response => response.json()) 
        .then(json => {
            if( json.drinks === null) {
                setList([])
            } else {
                setList(json.drinks)
            } 
        }) 
        .catch(err => console.log('Request Failed', err));
    
        }, [urlApi]);
    const handleShowDetail = (indexSelected) => {
        setItemSelected(indexSelected)
        setIsDetail(true)
    }
    const onClickReset = () => {
        setIsDetail(false)
    }
    return (
        <WrapMain isDetail={isDetail}>
            <div className="header">
                <div className="navbar">
                    <Logo className="logo-style"/>
                    <div className="wrap-direct">
                        <div className="nav-btn-style" onClick={() => setIsActive(true)}>
                            Home
                        </div>
                        <div className="nav-btn-style" onClick={() => setIsActive(false)}>
                            About
                        </div>
                    </div>
                </div>
            </div>
            {isActive === true ?
            <div className="bound-content">
                {
                    isDetail === true ?
                    <ItemDetail data={list[itemSelected]} onClickBack={onClickReset} />
                    :
                    <>
                        <div className="section-search">
                            <div className="search-form">
                                <div className="search-title">
                                    Search Your Favorite Cocktail
                                </div>
                                <input  className="input-style" type="text" value={inputState} onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className="title">Cocktails</div>
                        {list.length === 0 ? 
                            <div className="no-data">No Cocktails Matched Your Search Criteria</div>
                            :
                            <>
                            <div className="wrap-list-item">
                            {list.map((item, index) => (
                                <Item key={index} data={item} onClickShowDetail={() => handleShowDetail(index)} />
                            ))}
                            </div> 
                            </>               
                        }
                    </>
                }
                
            </div>
            :
            <div className="bound">
                <div className="wrap-content">
                    <div className="title-about-us"> About Us</div>
                    <p className="detail-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
                </div>
            </div>
            }
        </WrapMain>
    )
}
