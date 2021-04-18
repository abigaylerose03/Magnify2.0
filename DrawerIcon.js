import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import styles from './sidebarstyles';
import {Content, Icon} from 'native-base';

export default class DrawerIcon extends Component {
  render() {
    return (
         <Icon name='menu' ios='ios-menu' android="md-menu"/>
    );
  }
}

