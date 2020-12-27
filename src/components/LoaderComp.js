import React from 'react';
import {Dimmer, Loader} from "semantic-ui-react";

function LoaderComp({loading}) {
    return (
        <>
            <Dimmer active={loading} page>
                <Loader indeterminate>Loading</Loader>
            </Dimmer>
        </>
    );
}

export default LoaderComp;