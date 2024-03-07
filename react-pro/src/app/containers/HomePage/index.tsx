import React, { useEffect } from 'react'
import styled from 'styled-components'
import animeService from '../../services/animeService';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { setAnimePage } from './homePageSlice';
import { Dispatch } from "redux";
import { HotAnime } from './hotAnime';
import { useAppDispatch } from "../../hooks";

interface IHomePageProps { }

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;


const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page:GetAnimePage["Page"]) => dispatch(setAnimePage(page))
})

export function HomePage(props: IHomePageProps) {

    const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animepage = await animeService.getAnimePage(0).catch((err) => {
        console.log("Error ", err)
    });
    console.log("Anime Page ,", animepage);
    if(animepage){
        setAnimePage(animepage);
    }
};

 useEffect(() => {
  fetchAnimePage();
 },[])
    return (
        <Container>
            <h1>Hello</h1>
            <HotAnime/>
        </Container>

    );

}


