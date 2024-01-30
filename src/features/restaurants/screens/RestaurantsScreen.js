import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import styled from 'styled-components/native';
import Spacer from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utility/SafeArea';
import { RestaurantsContext } from '../../../services/restaurantsContext';

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

const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchInput placeholder="Search..." />
      </SearchContainer>
      <RestaurantList
        data={restaurantsContext.restaurants}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={({ id }, index) => id || index}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
