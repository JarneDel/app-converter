import Container from '../../Components/Container'
import { Switch, Text, View , StyleSheet, Settings as appSettings} from 'react-native'
import React, { useState } from 'react'

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };
  return (
    <Container>
      <View style={styles.horizontal}>
        <Text>Use Modern Roman Numbers</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

    </Container>
  )
}

export default Settings

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})