import React, {useEffect, useState} from 'react';
import {Card, Container, Grid, Header, Image, List} from "semantic-ui-react";
import deadGif from '../assets/alive.gif'
import aliveGif from '../assets/dead.gif'
import unknownGif from '../assets/unknown.gif'
import {findLastFromUrl} from "../utils/Methods";
import {getCharacters, getEpisodes} from "../api/apiRequests";
import EpisodeCard from "../components/episode/EpisodeCard";
import LoaderComp from "../components/LoaderComp";

const CharacterDetailsPage = ({match}) => {
    const [character, setCharacter] = useState({})
    const [characterEpisodes, setCharacterEpisodes] = useState([])
    const [loading, setLoading] = useState(false)

    const imageSelector = status => {
        if (status === "Dead") {
            return <Image circular bordered src={aliveGif}/>
        }
        if (status === "Alive") {
            return <Image circular bordered src={deadGif}/>
        }
        if (status === "unknown") {
            return <Image circular bordered src={unknownGif}/>
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        getCharacters(match?.params?.id).then(response1 => {
            setCharacter(response1.data)
            let episodes = response1?.data?.episode.map(url => {
                return findLastFromUrl(url)
            })
            episodes = episodes.length === 1 ? episodes : episodes.join()
            getEpisodes(episodes).then(response2 => {
                console.log(response2)
                setCharacterEpisodes(response2.data)
                setLoading(false)
            })
        })
    }, [])
    return (
        <>
            <LoaderComp loading={loading}/>
            {!loading && <Grid container stackable doubling>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image loading='lazy' circular
                               src={"https://rickandmortyapi.com/api/character/avatar/" + character?.id + ".jpeg"}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header size="huge">
                            {character.name}
                            <Header.Subheader>{character.species} / {character.gender}</Header.Subheader>
                        </Header>
                        <List>
                            <List.Item>
                                <List.Header>Origin Location</List.Header>
                                {character?.origin?.name}
                            </List.Item>
                            <List.Item>
                                <List.Header>Location</List.Header>
                                {character?.location?.name}
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header textAlign={"center"}>
                            Status
                        </Header>
                        {imageSelector(character.status)}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Header>Character Episodes</Header>
                    <Card.Group centered doubling style={{marginTop: 18}}>
                        {characterEpisodes.length > 1 ? <>{characterEpisodes?.map(episode => {
                                return <EpisodeCard episode={episode} key={episode.id}/>
                            })}</> :
                            <Container><EpisodeCard episode={characterEpisodes}/></Container>
                        }
                    </Card.Group>
                </Grid.Row>
            </Grid>}
        </>
    );
};

export default CharacterDetailsPage;