import { useQuery } from '@apollo/client';
import React from 'react';
import { View, Text} from 'react-native';
import { GET_PAGE } from 'src/gql/page.gql';
import { GetPageByName, GetPageByNameVariables } from 'src/gql/types/GetPageByName';

export const TestPage = () => {
  const { data, loading, error } = useQuery<GetPageByName, GetPageByNameVariables>(GET_PAGE, {
    variables: { name: "PageType.PAGE2" },
  });

  return (
    <View>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <Text>{'Data : ' + JSON.stringify(data) + ' || Error : ' + JSON.stringify(error)}</Text>
      )}
    </View>
  );
};
