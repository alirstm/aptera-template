import React, { type PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

const Section: React.FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? 'white' : 'black' }]}>{title}</Text>
      <Text style={[styles.sectionDescription, { color: isDarkMode ? 'lightblue ' : 'darkblue' }]}>
        {children}
      </Text>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'hsl(0, 0, 25%)' : 'hsl(0, 0, 100%)',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Section title="My App">Hello World!</Section>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
})

export default App
