import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
