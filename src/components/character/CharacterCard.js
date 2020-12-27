import React from 'react';
import {Button, Grid, Header, Image} from "semantic-ui-react";

const CharacterCard = ({char}) => {
    return (
        <Grid.Column>
            <Image
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

            <Button basic>View details &raquo;</Button>
        </Grid.Column>
    );
}

export default CharacterCard;