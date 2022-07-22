import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([])

  debugger
  useEffect(() => {    
    let repositoriesName = localStorage.getItem('RepositoriesName');
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)      
    } else {
      navigate('/');
    }  
  }, [navigate]); 

  return (
    <>
      <S.Container>
        <S.Title>Repositórios:</S.Title>
        <S.List>
          {repositories.map( (repository) => <S.ListItem> {repository} </S.ListItem>)}  
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
      </S.Container>
    </>
  );
}

