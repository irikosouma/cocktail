import styled from 'styled-components';
const WrapItem = styled.div`
margin-bottom: 2rem;
box-shadow: 2px 5px 3px 0px rgba(0,0,0,0.5);
border-radius: 0 0 3px 3px;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .images-style {
        width: 380px;
        height: 350px;
        object-fit: cover;
        border-radius: 3px 3px 0 0;
    }
    .wrap-content {
        background-color: #fff;
        width: calc(100% - 60px) ;
        border-radius: 0 0 3px 3px;
        padding: 30px;
        .name {
            font-weight: 700;
            font-size: 32px;
            line-height: 45px;
            color: #222222;
            letter-spacing: 4px;
            
        }
        .glass-type {
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #222222;
            letter-spacing: 6px;
        }
        .info {
            margin-bottom: 8px;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            color: #afafaf;
        }
        .btn-show-detail {
            width: 100px;
            height: 30px;
            background-color: #476a2e;
            color: #fff;
            border-radius: 3px;
            outline: none;
            border: none;
            letter-spacing: 4px;
            font-size: 13px;
            line-height: 18px;
            font-weight: 300;
            text-transform: uppercase;
            transition: all 0.5s linear;
            :hover {
                background-color:#D4E6A5;
                color: #476a2e;
            }
        }
    } */
    @media only screen and (min-width: 50px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .images-style {
            width: 100%;
            max-width: 709px;
            height: 350px;
            object-fit: cover;
            border-radius: 3px 3px 0 0;
        }
        .wrap-content {
            background-color: #fff;
            width: calc(100% - 60px);
            max-width: 649px;
            border-radius: 0 0 3px 3px;
            padding: 30px;
            .name {
                font-weight: 700;
                font-size: 32px;
                line-height: 45px;
                color: #222222;
                letter-spacing: 4px;
                
            }
            .glass-type {
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                color: #222222;
                letter-spacing: 6px;
            }
            .info {
                margin-bottom: 8px;
                font-weight: 300;
                font-size: 16px;
                line-height: 22px;
                color: #afafaf;
            }
            .btn-show-detail {
                width: 100px;
                height: 30px;
                background-color: #476a2e;
                color: #fff;
                border-radius: 3px;
                outline: none;
                border: none;
                letter-spacing: 4px;
                font-size: 13px;
                line-height: 18px;
                font-weight: 300;
                text-transform: uppercase;
                transition: all 0.5s linear;
                :hover {
                    background-color:#D4E6A5;
                    color: #476a2e;
                }
            }
        }
    }
`;
export {WrapItem}