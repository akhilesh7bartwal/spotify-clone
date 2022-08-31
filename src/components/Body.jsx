import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from 'react-icons/ai';
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

const Body = () =>{

    const [ {token, selectedPlaylistId, selectedPlaylist},dispatch ] = useStateProvider();

    useEffect(() =>{
        const getInitialPlaylist = async() => {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
            {
                headers:{
                    authorization: 'Bearer '+token,
                    'Content-Type': 'application/json'
                }
            })
            //console.log(response.data);
            const selectedPlaylist = {
                id: response.data.id,
                name: response.data.name,
                description: response.data.description.startsWith('<a') ? "" : 
                response.data.description,
                image:response.data.images[0].url,
                tracks: response.data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist)=> artist.name),
                    image: track.album.images[2].url,
                    duration: track.duration_ms,
                    album: track.album.name,
                    context_uri: track.album.uri,
                    track_number: track.track_number,
                })),
            };
            //console.log(selectedPlaylist);
            dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
        }
        getInitialPlaylist(); 
    },[token, dispatch, selectedPlaylistId])

    return (
        <Container>
            Body
        </Container>
    )
};

const Container = styled.div`

`;

export default Body;