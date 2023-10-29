import styled from 'styled-components';

export const Loginwindowstyles = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    margin: .1rem auto;
    margin-top: 60px;
    grid-gap: 1rem;
    box-shadow: 1px solid rgba(0,0,0,.2);
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        height: calc(100vh - 200px);
        width: 90%;
        margin: .1rem auto;
        margin-top: 60px;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        height: calc(100vh - 100px);
        width: 90%;
        margin: .1rem auto;
        margin-top: 80px;
    }
`

export const Contentstructure = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .Loginimage{
        width: 100%;
        height: 80vh;
        & img{
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }
    }
    & .FormContainer{
        width: 100%;

        & h1{
            text-align: center;
            padding: 1rem;
            font-size: 2.5rem;
        }
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        margin-left: 1rem;
        & .Loginimage{
            width: 80%;
            height: 80vh;
        }
        & .FormContainer{
            width: 80%;
            height: 80vh;
        }
    }
    
`

export const Formstyles = styled.form`
    width: 100%;
    height: auto;
    padding: .4rem;
    border-radius: 5px;
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
       padding: 1rem;
    }
    & .Formgroup{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: .4rem;
        margin-bottom: 1rem;

        & span{
            font-size: 1.5rem;
            padding-bottom: .6rem;
        }

        & .input {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            outline: 1px solid grey;
            border-radius: 10px;
            & .eyetoggle{
                width: 30px;
                height: 30px;
                margin-right: 1rem;
            }

            & input{
                padding: 1.2rem;
                border: none;
                outline: none;
                width: 80%;
                border-radius: 10px;
                background: var(--background-color);
                color: var(--text-color);
            }
            & input[type='text']{
                width: 100%;
            }
            & input[type='password']{
                width: 94%;
            }
        }
        & input[type='submit'] {
            padding: 1.2rem;
            border-radius: 10px;
            background: blue;
            color: white;
            text-align: center;
            font-size: 1.2rem;
            width: 80%;
            margin: .1rem auto;
            outline: none;
            border: none;
            cursor: pointer;
        }
        & p{
            text-align: center;
            width: 100%;
            font-weight: 500;
            font-size: 1.1rem;
        }
        & .creataccount{
            font-weight: 600;
        }

        & .Checkboxgroup{
            width: 100%;
            margin: .4rem auto;
            display: flex;
            align-items: center;
           justify-content: space-between;
        }

        & .Checkbox{
            display: flex;
            align-items: center;
            & label{
                margin-left: .6rem;
            }
        }
        & .link{
            color: orange;
        }
        & .decorated{
            text-decoration: underline;
        }
    }

`