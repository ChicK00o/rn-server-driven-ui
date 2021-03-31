import { useQuery } from '@apollo/client';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, Button } from 'native-base';
import { GET_PAGE } from 'src/gql/page.gql';
import { GetPageByName, GetPageByNameVariables } from 'src/gql/types/GetPageByName';

export const TestPage = () => {
  const { data, loading, error } = useQuery<GetPageByName, GetPageByNameVariables>(GET_PAGE, {
    variables: { name: 'PageType.PAGE2' },
  });

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large"/>
      ) : (
        <>
        <Text>{'Data : ' + JSON.stringify(data) + ' || Error : ' + JSON.stringify(error)}</Text>
        <Button colorScheme="emerald">this is test</Button>
        </>
      )}
    </>
  );
};
