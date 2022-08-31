import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { reducerCases } from "../utils/Constants";

const Spotify = () =>{
    
    const [{token, userInfo}, dispatch] = useStateProvider();

    useEffect(() =>{
        const userData = async () =>{
            
            const response = await axios.get('https://api.spotify.com/v1/me',
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                }
            })
            //console.log(response.data);
            const userInfo = {
                userId: response.data.id,
                userName: response.data.display_name
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
        }
        userData();
    },[dispatch, token])

    return(
        <Container>
            <div className="spotify__body">
                <Sidebar />
                <div className="body">
                    <Navbar />
                    <div className="body__contents">
                        <Body />
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .spotify__body{
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: rgb(32, 87, 100);

        .body{
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    } 
`; 

export default Spotify