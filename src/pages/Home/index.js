import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //para enviar dados de uma página para outra
import * as S from "./styled";

function App() {
  
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');    
  const [name, setName] = useState('Nome...');
  const [bio, setBio] = useState('Biografia..');
  const [location, setLocation] = useState('Localização..');

  const[erro, setErro] = useState(false);
  const [ image, setImage ] = useState('https://github.githubassets.com/images/modules/open_graph/github-octocat.png');
  
  function handleSearchUser() {
    debugger
    const URL = `https://api.github.com/users/${usuario}`;
    axios.get(URL)
      .then(res => {                       
        setImage(res.data.avatar_url)  
        setName(res.data.name)     
        setBio(res.data.bio)     
        setLocation(res.data.location)     
      }) 
        .catch(err => setErro(true)
      ) 
  } 
 
  function handleSearchRepositories() {
    debugger
    const URL = `https://api.github.com/users/${usuario}/repos`;
    axios.get(URL)
      .then(response => {            
        const repositories = response.data;      
        const repositoriesName = [];       
        repositories.forEach(item => repositoriesName.push (item.name))
        localStorage.setItem('RepositoriesName', JSON.stringify(repositoriesName))      
        navigate('/repositories')          
      }) 
        .catch(err => setErro(true)
      )            
  } 

  return (
    <>
     <S.HomeContainer>          
          <S.Content> 
            <S.Input placeholder="Digite o nome do usuário GitHub" 
              value={usuario} onChange={e => {setUsuario(e.target.value); setErro(false) }}/>            
            <S.ButtonSearch  type="button" onClick={handleSearchUser}>Pesquisar</S.ButtonSearch> 
            { erro ? <S.ErrorMsg>Usuário não localizado.Verifique o nome!</S.ErrorMsg> : " " }                       
            <S.IMG src={image} alt="Foto de perfil do usuário"/>   
            <S.ListUser>
               <S.ListItemName>{name} </S.ListItemName>                  
                <S.ListItemBio>{bio} </S.ListItemBio>                  
                <S.ListItemLocalizacao>{location} </S.ListItemLocalizacao>  
            </S.ListUser>   
            <S.ButtonRepo type="button" onClick={handleSearchRepositories}>Repositórios</S.ButtonRepo>         
          </S.Content>        
      </S.HomeContainer>
    </>
  );
}

export default App;