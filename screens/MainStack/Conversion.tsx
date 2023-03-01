import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native'
import React, { useState } from 'react'
import Container from '../../Components/Container'
import {
  calculateArabic,
  calculateRoman,
  lookup,
} from '../../hooks/CalculateRoman'
import { ConversionTable } from '../../interfaces/conversionTable'
import colors from '../../styles/colors'

const Conversion = () => {
  const [romanNumber, setRomanNumber] = useState('')
  const [steps, setSteps] = useState<ConversionTable>({})
  const [hasDetails, setHasDetails] = useState<boolean>(false)
  const calculateRomanNumber = (e?: string) => {
    if (e === "") {
      setHasDetails(false)
      setRomanNumber("")
      return
    }
    setHasDetails(true)
    const { roman, steps } = calculateRoman(e)
    setRomanNumber(roman)
    setSteps(steps)
  }

  const getDetails = () : JSX.Element[] => {
    const list = []
    for (const type in steps) {
      if (steps[type] === 0) continue
      list.push(
        <Text key={type}>
          {steps[type]} X {lookup[type]} = {type.repeat(steps[type])}
        </Text>,
      )
    }
    return list.reverse()
  }
  const getDetailsContainer = () => {
    if (!hasDetails) return <View></View>
    return (
      <View>
        <Text style={styles.title}>Details</Text>
        <View style={styles.detailContainer}>{getDetails()}</View>
      </View>
    )
  }

  return (
    <>
      <Container>
        <TextInput
          placeholder={'eg. 768'}
          style={styles.input}
          keyboardType={'number-pad'}
          inputMode={'numeric'}
          maxLength={4}
          onChangeText={calculateRomanNumber}
        />
        <Text style={styles.roman}>{romanNumber}</Text>
        {getDetailsContainer()}
      </Container>
    </>
  )
}

export default Conversion

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 8,
  },
  input: {
    color: 'black',
    fontSize: 32,
    fontWeight: '500',
    borderStyle: 'solid',
    borderColor: '#f2eeeb',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
  },
  roman: {
    color: colors.primary[100],
    fontWeight: '700',
    letterSpacing: 2,
    fontSize: 24,
    fontFamily: 'monospace',
    fontVariant: ['tabular-nums'],
    marginTop: 8,
  },
  detailContainer: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: '#f2eeeb',
    borderWidth: 2,
    backgroundColor: colors.neutral['200'],
    padding: 8,
  },
})
