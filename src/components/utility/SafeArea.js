import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';

const isAndroid = Platform.OS === 'android';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
