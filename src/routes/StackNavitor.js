import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/Search.js/SearchScreen';

const Stack = createNativeStackNavigator();

const StackNavitor = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={BottomTab} />
      <Stack.Screen name='Search' component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavitor;
