import React from 'react';
import { View, Text } from 'react-native';

export default function DetailScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Company: {user.company?.name}</Text>
    </View>
  );
}
