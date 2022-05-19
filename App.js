import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SearchBar,ListItem, Avatar } from "@rneui/themed";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
export default () => {  
  return (
    
    <SafeAreaProvider>
    <Header
    backgroundColor="#152196"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "Apprenants de La Manu",
        style: { color: "#fff", fontSize:18 }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 360 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
     <SearchBar
      platform="default"
      containerStyle={{ backgroundColor: "white" }}
      inputContainerStyle={{ backgroundColor: "#e1e1e1" }}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      lightTheme
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="ex. John DOE"
      placeholderTextColor="#8c8c8c"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
    />
    
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={10}
      topDivider
    >
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="JD"
      titleStyle={{}}
    />
      <ListItem.Content>
        <ListItem.Title>
          <Text>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={10}
      topDivider
    >
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="JD"
      titleStyle={{}}
    />
      <ListItem.Content>
        <ListItem.Title>
          <Text>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={10}
      topDivider
    >
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="JD"
      titleStyle={{}}
    />
      <ListItem.Content>
        <ListItem.Title>
          <Text>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={10}
      topDivider
    >
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="JD"
      titleStyle={{}}
    />
      <ListItem.Content>
        <ListItem.Title>
          <Text>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={10}
      topDivider
    >
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="JD"
      titleStyle={{}}
    />
      <ListItem.Content>
        <ListItem.Title>
          <Text>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
    </SafeAreaProvider>
    
  );
}
