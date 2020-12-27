import React, {useEffect, useState} from 'react';
import {getEpisodesForPage} from "../api/apiRequests";
import {Card, Grid, Header, Menu, Pagination} from "semantic-ui-react";
import EpisodeCard from "../components/episode/EpisodeCard";
import LoaderComp from "../components/LoaderComp";


function MainPage() {

    const [episodes, setEpisodes] = useState([])
    const [info, setInfo] = useState({})
    const [activePage, setActivePage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getEpisodesForPage(activePage).then(response => {
            setEpisodes(response?.data?.results)
            setInfo(response?.data?.info)
            setLoading(false)
        })
    }, [activePage])

    const handlePaginationChange = (e, {activePage}) => {
        setActivePage(activePage)
    }


    return (
        <div>
            <LoaderComp loading={loading}/>
            <Grid>
                <Grid.Column>
                    <Grid.Row>
                        <Header size={"large"}>Rick And Morty Episodes</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Card.Group centered doubling itemsPerRow={4} style={{marginTop: 18}}>
                            {episodes.map((episode) => {
                                return <EpisodeCard episode={episode} key={episode.id}/>
                            })}
                        </Card.Group>
                    </Grid.Row>
                    <Grid.Row>
                        {episodes.length > 0 &&
                        <Menu basic={"true"} style={{marginTop: 22}} fixed={'bottom'}>
                            <Menu.Item>
                                Page Count: {episodes?.length}
                            </Menu.Item>
                            <Menu.Item>
                                Total Count: {info?.count}
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Pagination
                                    floated='right'
                                    onPageChange={handlePaginationChange}
                                    activePage={activePage}
                                    boundaryRange={0}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={info?.pages || 1}
                                />
                            </Menu.Item>
                        </Menu>
                        }
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default MainPage;