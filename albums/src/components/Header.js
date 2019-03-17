// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    // this is how you import style into this component
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// adding style to a component. they consist of JS objects. no css selectors

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the app.****Only the 'root' component uses 'App Registry'****** for everything else you export

export default Header;

