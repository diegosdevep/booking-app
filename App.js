import { NavigationContainer } from '@react-navigation/native';
import { ModalPortal } from 'react-native-modals';
import BottomTab from './src/routes/BottomTab';
import StackNavitor from './src/routes/StackNavitor';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavitor />
      <ModalPortal />
    </NavigationContainer>
  );
}
