import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // above you can remove props since you are only gathering infomation from the album property and deconstruct it as shown below. Then in the View you can remove prop.album and just reference the properties you want to view. 

    const { title, artist, thumbnail_image, image, url } = album;
    // const { thumbnailStyle, headerContentSytle, thumbnailStyle, headerContentStyle, imageStyle } = styles;
    // this style deconstruct allows you to remove styles.... from the beginning of these properties. or you can choose to leave as is, your choice and preference.
    return (
        <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image 
                style={styles.thumbnailStyle}
                source={{ uri: thumbnail_image }} 
                />
            </View>
            <View style={styles.headerContentStyle}>    
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image 
                style={styles.imageStyle}
                source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                {/* adding this onPress to the button component and passing on a prop makes this function reusable for other buttons, the linking library in react native allows you to open up another URL in the persons phone. by adding this to the button it takes you to the amazon page where you can buy the album*/}
                <Button onPress={() => Linking.openURL(url)}>
                Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10, 
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
    
};

export default AlbumDetail;
