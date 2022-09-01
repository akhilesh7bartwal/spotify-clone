import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

const CurrentTrack = () =>{

    const [{token}, dispatch] = useStateProvider();

    useEffect(() => {
        const getCurrentTrack = async () => {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
    
            console.log(response)
          //dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getCurrentTrack();
      }, [token, dispatch]);
    return (
        <Container>
            current
        </Container>
    )
}

const Container = styled.div`

`;

export default CurrentTrack;