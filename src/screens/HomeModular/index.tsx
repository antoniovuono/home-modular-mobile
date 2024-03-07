import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type HomeModularProps = {
  screenName: string
  componentA: boolean
  componentB: boolean
  componentC: boolean
  onPress?: () => void
}

export const HomeModular = ({
  screenName,
  componentA,
  componentB,
  componentC,
  onPress,
}: HomeModularProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{screenName}</Text>

      <View style={styles.componentsCotnainer}>
        {componentA && (
          <View style={styles.componentA}>
            <Text>Component A</Text>
          </View>
        )}

        {componentB && (
          <View style={styles.componentB}>
            <Text>Component B</Text>
          </View>
        )}

        {componentC && (
          <View style={styles.componentC}>
            <Text>Component C</Text>
          </View>
        )}
      </View>

      <Text style={styles.buttonNext} onPress={onPress}>
        Próxima tela
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  screenTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  componentsCotnainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'lightyellow',
    padding: 15,
  },
  componentA: {
    width: 110,
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentB: {
    width: 110,
    height: 100,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentC: {
    width: 110,
    height: 100,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNext: {
    padding: 10,
    backgroundColor: 'purple',
    color: 'white',
    marginTop: 20,
  },
})
