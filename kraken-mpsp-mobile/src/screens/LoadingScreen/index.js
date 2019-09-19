import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class LoadingScreen extends Component {

    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        return(
            <View>
                <Text>Página LoadingScreen</Text>

                <TouchableOpacity onPress={() => navigate("Home")}>
                    <Text>ir para Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Search")}>
                    <Text>ir para Search</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Options")}>
                    <Text>ir para Options</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigate("Profile")}>
                    <Text>ir para Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Contact")}>
                    <Text>ir para Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Terms")}>
                    <Text>ir para Terms</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigate("Login")}>
                    <Text>ir para Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("ProfileRegister")}>
                    <Text>ir para ProfileRegister</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}