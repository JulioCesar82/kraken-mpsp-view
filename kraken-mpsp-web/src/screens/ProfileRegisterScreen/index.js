import React, { Component } from "react";

import "./styles.css";

import FullContainer from "../../containers/FullContainer";

export default class OptionsScreen extends Component {

    render() {
        return(
            <FullContainer
                content={
                    <div>
                        <h1>Página OptionsScreen</h1>
                    </div>
                }            
            />
        );
    }
}