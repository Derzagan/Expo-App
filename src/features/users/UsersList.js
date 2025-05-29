import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useGetUsersQuery } from './usersApi';

export default function UsersList() {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Ошибка загрузки данных</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}
