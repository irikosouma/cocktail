import styled from 'styled-components';
const WrapItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 85vw;
    max-width: 1170px;
    margin: 0 auto;
    text-align: left;
    .btn-click-back {
        margin-top: 80px;
        width: 145px;
        height: 34px;
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
    .name {
        font-weight: 700;
        font-size: 32px;
        line-height: 45px;
        color: #222222;
        letter-spacing: 4px;
        margin-bottom: 3.5rem;
        margin-top: 1rem;
    }
    .content-detail {
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-gap: 3rem;
        gap: 3rem;
        .flex-content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
            .wrap-content-detail {
                display: grid;
                grid-template-rows: repeat(6, 36px);
                grid-row-gap: 10px;
                .info-item {
                    width: fit-content;
                    padding: 4px 5px;
                    border-radius: 3px;
                    background-color: #D4E6A5;
                    color: #476A2E;
                    font-size: 16px;
                    line-height: 29px;
                    font-weight: 700;
                    margin-right: 12px;
                }
                .name-detail, .category-type, .info, .glass-type, .instruction, .ingredient {
                    font-size: 16px;
                    line-height: 29px;
                    font-weight: 700;
                    color: #222222;
                }
            }
        }
        

    }
    .images-style {
        width: 100%;
        object-fit: cover;
        border-radius: 3px 3px 0 0;
    }

`;
export {WrapItem}