import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useGetUsersQuery } from '../features/users/usersApi';

export default function HomeScreen({ navigation }) {
  const { data, error, isLoading, refetch } = useGetUsersQuery();

  if (isLoading) return <Text>Загрузка...</Text>;
  if (error) return <Text>Ошибка загрузки данных</Text>;

  return (
    <View style={{ flex: 1 }}>
      {}
      <Button title="Обновить список" onPress={refetch} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 10, borderBottomWidth: 1 }}
            onPress={() => navigation.navigate('Detail', { user: item })}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
