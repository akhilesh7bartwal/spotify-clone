import React from "react";
import styled from "styled-components";

const Login =() =>{

    const handleClick = () => {
        const clientId = '2a614d16b46449c58fb8551ad6896421';
        const redirectUrl = 'http://localhost:3000/';
        const apiUrl = 'http://accounts.spotify.com/authorize';
        const scope = ['user-read-email', 
        'user-read-private', 
        'user-modify-playback-state', 
        'user-read-playback-state', 
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-position',
'        user-top-read'
    ];
    window.location.href= `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join
        (" ")}&response_type=token&show_daialog=true`
    }
    return(
        <Container>
            <img 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt="spotify"/>
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;

    img{
        height: 20vh;
    };

    button{
        padding: 1rem 5rem;
        border-radius: 25px;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;


export default Login;
