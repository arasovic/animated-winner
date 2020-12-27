import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "semantic-ui-react";
import MainPage from "../../pages/MainPage";
import EpisodeDetailsPage from "../../pages/EpisodeDetailsPage";
import CharacterDetailsPage from "../../pages/CharacterDetailsPage";


function PageRouter() {
    return (
        <Container style={{marginTop: 88}}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/episode-details/:id" component={EpisodeDetailsPage}/>
                <Route path="/character-details/:id" component={CharacterDetailsPage}/>
            </Switch>
        </Container>
    );
}

export default PageRouter;