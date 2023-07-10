import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '@screens/Search';
import { Dashboard } from '@screens/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="search"
        component={Search}
      />

      <Screen
        name="dashboard"
        component={Dashboard}
      />
    </Navigator>
  )
}