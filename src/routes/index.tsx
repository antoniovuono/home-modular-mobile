import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './stack.routes'

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}
