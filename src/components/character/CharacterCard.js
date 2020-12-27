import React from 'react';
import {Button, Grid, Header, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const CharacterCard = ({char}) => {
    return (
        <Grid.Column>
            <Image
                loading='lazy'
                centered
                circular
                size="small"
                src={"/api/character/avatar/" + char?.id + ".jpeg"}
            />
            <Header as="h3">
                {char.name}
                <Header.Subheader>
                    {char.species}
                </Header.Subheader>
            </Header>

            <Button as={Link} basic to={"/character-details/" + char.id}>View details &raquo;</Button>
        </Grid.Column>
    );
}

export default CharacterCard;