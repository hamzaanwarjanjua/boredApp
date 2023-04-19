import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';



export const RNIcon =  (props) =>  {
  const { style, enableRTL, Iconname, ...rest } = props;

  if (Iconname == "AntDesign") {
    return <AntDesign style={StyleSheet.flatten([style])} {...rest} />;
  }
  if (Iconname == "Entypo") {
    return <Entypo style={StyleSheet.flatten([style])} {...rest} />;
  }
  if (Iconname == "Ionicons") {
    return <Ionicons style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  if (Iconname == "EvilIcons") {
    return <EvilIcons style={StyleSheet.flatten([style,])} {...rest} />;
  }
  if (Iconname == "Feather") {
    return <Feather style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  if (Iconname == "FontAwesome") {
    return <FontAwesome style={StyleSheet.flatten([style,])} {...rest} />;
  }
  if (Iconname == "FontAwesome5Pro") {
    return <FontAwesome5Pro style={StyleSheet.flatten([style,])} {...rest} />;
  }
  if (Iconname == "Fontisto") {
    return <Fontisto style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  if (Iconname == "Foundation") {
    return <Foundation style={StyleSheet.flatten([style,])} {...rest} />;
  }
  if (Iconname == "MaterialCommunityIcons") {
    return <MaterialCommunityIcons style={StyleSheet.flatten([style])} {...rest} />;
  }
  if (Iconname == "MaterialIcons") {
    return <MaterialIcons style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  if (Iconname == "Octicons") {
    return <Octicons style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  if (Iconname == "Zocial") {
    return <Zocial style={StyleSheet.flatten([style, ])} {...rest} />;
  }
  return <Icon style={StyleSheet.flatten([style])} {...rest} />;

}

RNIcon.prototype = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  enableRTL: PropTypes.bool,
  Iconname: PropTypes.string,
};

RNIcon.defaultProps = {
  style: {},
  Iconname: 'FontAwesome5',
  enableRTL: false,
};
