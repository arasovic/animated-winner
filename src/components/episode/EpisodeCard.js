import React from 'react';
import {Card, Label} from "semantic-ui-react";
import {Link} from "react-router-dom";

function EpisodeCard(props) {
    const {episode} = props
    return (
        <Card as={Link} className='fade-in' key={episode.id} to={"/episode-details/" + episode.id}>
            <Card.Content>
                <Card.Header className={'textOverflow'}>{episode.name}</Card.Header>
                <Card.Meta>{episode.episode}</Card.Meta>
                <Card.Description style={{marginBottom: 5}}>
                    {episode.air_date}
                </Card.Description>
                <Label color='blue' ribbon={"right"}>
                    Character Count: {episode.characters?.length}
                </Label>
            </Card.Content>
        </Card>
    );
}

export default EpisodeCard;