import React, {useEffect, useState} from 'react';
import {getCharacters, getEpisodes} from "../api/apiRequests";
import {Container, Dropdown, Grid, Header, Input, Menu, Segment} from "semantic-ui-react";
import {findLastFromUrl, sortMethod} from "../utils/Methods";
import CharacterCard from "../components/character/CharacterCard";
import LoaderComp from "../components/LoaderComp";

const options = [
    {key: 1, text: 'Sort By Name Desc', value: "NAME_DESC"},
    {key: 2, text: 'Sort By Name Asc', value: "NAME_ASC"},
]


const EpisodeDetailsPage = (props) => {

    const [episode, setEpisode] = useState({})
    const [characters, setCharacters] = useState([])
    const [cloneCharacters, setCloneCharacters] = useState([])
    const [searchKeyword, setSearchKeyword] = useState("")
    const [sortValue, setSortValue] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scroll(0, 0)
        setLoading(true)
        const episodeId = findLastFromUrl(props?.location?.pathname)
        getEpisodes(episodeId).then(response1 => {
            setEpisode(response1?.data)
            let characterIdArray = response1?.data?.characters.map(char => {
                return findLastFromUrl(char)
            })
            let url = characterIdArray.join()
            getCharacters(url).then(response2 => {
                setCharacters(response2.data)
                setCloneCharacters(response2.data)
                setLoading(false)
            })
        })
    }, [])

    const onChangeSearch = (e, {value}) => {
        setSearchKeyword(value)
        let filteredCharacters = cloneCharacters.filter(char => char.name.toLowerCase().includes(value.toLowerCase()))
        setCharacters(filteredCharacters)
    }

    const onChangeSort = (e, {value}) => {
        setSortValue(value)
        const sortedCharacters = sortMethod(characters, value)
        setCharacters(sortedCharacters)
    }

    return (
        <>
            <LoaderComp loading={loading}/>
            {!loading && <Segment vertical>
                <Container>
                    <Header size={"large"}>{episode?.episode} - {episode?.name}
                        <Header.Subheader>
                            {episode?.air_date}
                        </Header.Subheader>
                    </Header>
                    <Menu basic={"true"} stackable>
                        <Menu.Item>
                            <Header>Characters</Header>
                        </Menu.Item>
                        <Dropdown item={true} placeholder='Sort'
                                  options={options}
                                  onChange={onChangeSort}/>
                        <Menu.Item position='right'>
                            <Input className='icon' icon='search' placeholder='Search...' value={searchKeyword}
                                   onChange={onChangeSearch}/>
                        </Menu.Item>

                    </Menu>
                </Container>
                <Grid container stackable textAlign="center" columns={4} style={{marginTop: 22}}>
                    {characters.map(char => {
                        return <CharacterCard char={char} key={char.id}/>
                    })}
                    <Grid.Row>
                        <Header>
                            {searchKeyword === "" ? <>Total
                                Characters: {characters?.length} </> : <>Results: {characters?.length}</>}
                        </Header></Grid.Row>
                </Grid>
            </Segment>}
        </>
    );
};

export default EpisodeDetailsPage;