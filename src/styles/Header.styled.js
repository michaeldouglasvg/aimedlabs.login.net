import styled from 'styled-components';

// Main header styles
export const HeaderStyledComponent = styled.header`
 width: 100%;
 padding: .1rem 1rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-wrap: wrap;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999;
 background: var(--background-color);
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 &:hover{
   box-shadow: ${({theme}) => theme.colors.boxshadow};
 }

 & > .Leftflex{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 & > .Rightflex{
   display: flex;
   align-items: center;
   flex-wrap: wrap;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: .4rem 7rem;
 }
`

// Heade >> Logo style
export const Logo = styled.div`
 width: auto;
 height: 60px;
 display: grid;
 place-items: center;
 cursor: pointer;
 overflow: hidden;
 border-radius: 5px;
 & P{
   font-size: 2rem;
   font-weight: 700;
 }
`

// Header >> Events style
export const Events = styled.div`
 height: 35px;
 width: 35px;
 display: grid;
 place-items: center;
 padding: .1rem .4rem;
 border-radius: 5px;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  margin-left: 1rem;
 }
 & p{
   font-size: 2rem;
 }
`


// Header >> Theme section and Settings
export const ThemeSettings = styled.div`
 width: 50px;
 height: 40px;
 padding: .2rem .8rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 5px;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 margin-left: .4rem;
 inset: -20px;
 cursor: pointer;
`
