import React from 'react';
import {Container, Image, Menu} from "semantic-ui-react";
import Icon from '../../assets/iconfinder_rick_2981856.png'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Menu fixed='top'>
                <Container>
                    <Menu.Item as={Link} header to={"/"}>
                        <Image size='mini' src={Icon} style={{marginRight: '1.5em'}}/>
                        Rick And Morty
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    );
}

export default NavBar;