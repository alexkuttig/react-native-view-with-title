// @flow
'use strict';
import {
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const statusBarHeight = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : StatusBar.currentHeight;
export const headerHeight = Platform.OS === 'ios' ? 44 : 56;
export const paddingBottomHeight = Platform.OS === 'ios' ? (isIphoneX() ? 34 : 0) : 0;

export const SafeAreaWithHeader: {vh: number, vw: number} = {
    vh: (Dimensions.get('window').height - statusBarHeight - headerHeight - paddingBottomHeight) / 100,
    vw: Dimensions.get('window').width / 100
};