import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class testApp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("crowd.jpg")} />
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          hello there, this a test to see how a l0t of text looks.
        </Text>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0, 0],
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [
              {
                translate: [0, 0, 5]
              }
            ]
          }}
        >
          Where can I make this go?
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("testApp", () => testApp);
