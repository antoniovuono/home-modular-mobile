import { createStackNavigator } from '@react-navigation/stack'
import { HomeModular } from '../screens/HomeModular'
import { useCreateScreen } from '../hooks/useCreateScreen'
import { ActivityIndicator } from 'react-native'
import { useNavigation, useNavigationState } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

export const Stack = () => {
  const { screens, isLoading } = useCreateScreen()

  const { navigate } = useNavigation()
  const state = useNavigationState((state) => state)

  const navigateToNextRoute = () => {
    const routeindex = state.index
    const routeCounter = state.routeNames.length

    if (routeindex < routeCounter - 1) {
      navigate(state.routeNames[routeindex + 1] as never)
    } else {
      navigate(state.routeNames[0] as never)
    }
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screens[0].name}
    >
      {screens.map((screen) => (
        <Screen key={screen.id} name={screen.name}>
          {() => (
            <HomeModular
              screenName={screen.name}
              componentA={!!screen.component_a}
              componentB={!!screen.component_b}
              componentC={!!screen.component_c}
              onPress={navigateToNextRoute}
            />
          )}
        </Screen>
      ))}
    </Navigator>
  )
}
