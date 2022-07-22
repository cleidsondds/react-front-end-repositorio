import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100vh;  
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;  
  align-items: center;
  justify-content: left;
  left: 10%;  
`;

export const Input = styled.input`  
  
  border: 2px solid black;
  padding: 0.5rem;  
  border-radius: 0.4rem; 
  position: absolute;
  font-size: 1.0rem;
  
  top: 2rem;
  height: 2rem;
  width: 20rem;
  left: 1rem;
 
  flex-direction: column;  
  justify-content: center;  

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonSearch = styled.button`
    
  border: 2px solid #000;
  background: #000;
  color: #fff;
  border-radius: 4rem;
  font-size: 1.5rem;

  position: absolute;
  top: 2rem;
  height: 3rem;
  width: 12.5rem;
  left: 23rem;

  &:hover{
    background: red},

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonRepo = styled.button`
  
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 4rem;
  font-size: 1.5rem;

  position: absolute;

  top: 21rem;
  height: 3rem;
  width: 12.5rem;
  left: 1rem;

  &:hover{
    background: red},

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const IMG = styled.img`  
  
  border: 3px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  position: absolute;

  top: 8rem;
  width: 12rem;
  height: 12rem;
  left: 1rem;
 
  flex-direction: column;  
  justify-content: center;  
    
`;

export const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListUser = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  border-radius: 4rem;
`;

export const ListItemName = styled.li`
  
  margin: .5rem 0 ;
  background: #000;
  color: #fff;
  padding: .5rem;
  position: absolute;
  border-radius: 1rem;
  font-size: 1.0rem;  
  display: flex;
  align-items: center;

  top: 8rem;
  width: 20rem;
  height: 2rem;
  left: 15rem;

`;

export const ListItemBio = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
  position: absolute;
  border-radius: 1rem;
  font-size: 1.0rem;  
  display: flex;
  align-items: center;

  top: 12rem;
  width: 20rem;
  height: 2rem;
  left: 15rem;

`;

export const ListItemLocalizacao = styled.li`
  
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
  position: absolute;
  border-radius: 1rem;
  font-size: 1.0rem;  

  display: flex;
  align-items: center;

  top: 16rem;
  width: 20rem;
  height: 2rem;
  left: 15rem;

`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.85rem;
  color: red;
  font-weight: 600;  
  position: absolute;

  top: 6rem;
  width: 20rem;
  height: 0.5rem;
  left: 1rem;
`