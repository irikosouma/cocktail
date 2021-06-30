import styled from 'styled-components';
const WrapMain = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-rows: 75px 1fr;
.header {
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid #476a2e;
    box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 50%);
    .navbar {
        width: 85vw;
        height: 100%;
        margin: 0 auto;
        max-width: 1170px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-style {
            width: 192px;
            height: 18px;
            cursor: pointer;
        }
        .wrap-direct {
            width: 130px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav-btn-style {
                color: #000;
                font-size: 19px;
                line-height: 27px;
                font-weight: 400;
                cursor: pointer;
                :hover {
                    color: #476a2e;
                }
            }
        }
    }
}
/* .bound-content {
    
    height: 100%;
    width: 85vw;
    height: 100%;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .section-search {
        margin-top: 100px;
        width: 100%;
        display: ${(props) => props.isDetail === true ? "none": "block"};

    }
    .search-form {
        max-width: 560px;
        height: 80px;
        padding: 32px 40px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 50%);
        border-radius: 3px;
        .search-title {
            width: 100%;
            padding-bottom: 20px;
            color: #476a2e;
            font-size: 16px;
            line-height: 22px;
            font-weight: 700;
            letter-spacing: 5px;
        }
        .input-style {
            background-color: #F1F5F8;
            width: 100%;
            height: 36px;
            border-radius: 3px;
            appearance: none;
            border: none;
            padding-left: 10px;
            font-size: 19px;
        }
    }
    .title {
        display: ${(props) => props.isDetail === true ? "none": "block"};
        margin-top: 100px;
        font-size: 32px;
        line-height: 45px;
        color: #222222;
        font-weight: 700;
        letter-spacing: 5px;
        margin-bottom: 55px;
        
    }
    .wrap-list-item {
        display: grid;
        grid-template-columns: ${(props) => props.isDetail === true ? "1fr" : "repeat(3, 1fr)"};
        grid-row-gap: 40px;
        grid-column-gap: 30px;
        
    }
    .no-data {
            font-weight: 700;
            font-size: 32px;
            line-height: 45px;
            color: #222222;
        }
} */
.bound {
    
    height: 100%;
    width: 85vw;
    height: 100%;
    margin: 0 auto;
    max-width: 40rem;
    
    .wrap-content {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title-about-us {
            padding-top: 12px;
            font-size: 32px;
            line-height: 45px;
            color: #222222;
            font-weight: 700;
            letter-spacing: 4px;
        }
        .detail-content {
            padding-top: 40px;
            font-size: 16px;
            line-height: 32px;
            color: #222222;
            font-weight: 400;
            letter-spacing: 2px;
        }
    }
}
@media only screen and (min-width: 50px) {
    .bound-content {
        height: 100%;
        width: 85vw;
        height: 100%;
        margin: 0 auto;
        max-width: 1170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .section-search {
            margin-top: 100px;
            width: 100%;
        }
        .search-form {
            max-width: 560px;
            height: 80px;
            padding: 32px 40px;
            margin: 0 auto;
            background-color: #fff;
            box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 50%);
            border-radius: 3px;
            .search-title {
                width: 100%;
                padding-bottom: 20px;
                color: #476a2e;
                font-size: 16px;
                line-height: 22px;
                font-weight: 700;
                letter-spacing: 5px;
            }
            .input-style {
                background-color: #F1F5F8;
                width: 100%;
                height: 36px;
                border-radius: 3px;
                appearance: none;
                border: none;
                padding-left: 10px;
                font-size: 19px;
            }
        }
        .title {
            margin-top: 100px;
            font-size: 32px;
            line-height: 45px;
            color: #222222;
            font-weight: 700;
            letter-spacing: 5px;
            margin-bottom: 55px;
            
        }
        .wrap-list-item {
            /* width: 85vw; */
            margin: 0 auto;         
        }
        .no-data {
                font-weight: 700;
                font-size: 32px;
                line-height: 45px;
                color: #222222;
            }
    }
}
@media only screen and (min-width: 835px) {
    .wrap-list-item {
        display: grid;
        grid-template-columns: repeat(2, minmax(338.8px, 1fr));
        grid-template-rows: repeat(auto-fill, 1fr);
        grid-row-gap: 40px;
        grid-column-gap: 40px;
    }
}
@media only screen and (min-width: 1272px) {
    .wrap-list-item {
        display: grid;
        grid-template-columns: repeat(3, minmax(338.8px, 1fr));
        grid-template-rows: repeat(auto-fill, 1fr);
        grid-row-gap: 40px;
        grid-column-gap: 40px;
    }
}
`;
export {WrapMain}