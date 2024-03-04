import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import styled from 'styled-components/native';
import Spacer from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utility/SafeArea';
import { RestaurantsContext } from '../../../services/restaurantsContext';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { LocationContext } from '../../../services/location/locationContext';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchInput = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);
  // console.log(error);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <SearchInput placeholder="Search..." onChangeText={(text) => console.log(text)} />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={({ id }, index) => id || index}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
