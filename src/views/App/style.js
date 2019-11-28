import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Sulphur Point';
    background-color:#8E2DE2;
    min-height: 100vh;
`;

export const Row = styled.div`
    background-color: #fff;
    min-height: calc(100vh - 30px);
    margin: 15px 0;
    width: 75%;
    max-width: 1140px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {  
        font-size: 45px;
    }

    form {
        display: flex;
        text-align: left;

        label {
            display: flex;
            flex-direction: column;
            margin: 5px;
            font-size: 18px;

            input {
                padding: 10px;
                font-size: 15px;
                border-radius: 7px;
                border: 1px solid #ccc;

                &:focus {
                    outline: none;
                }
            }
        }
        
        button {
            display: none;
        }
    }

    pre {
        margin: 35px; 
        font-size: 13px;
    }

`;