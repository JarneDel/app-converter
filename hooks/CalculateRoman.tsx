import { ConversionTable } from '../interfaces/conversionTable'

export const calculateRoman = (e?: string) => {
  let out = ''
  let steps: ConversionTable = { M: 0, D: 0, C: 0, L: 0, X: 0, V: 0, I: 0 }
  let numberE = Number(e)
  for (let i in lookup) {
    while (numberE >= lookup[i]) {
      out += i
      steps[i] += 1
      numberE -= lookup[i]
    }
  }
  return { roman: out, steps: steps }
}

export const calculateArabic = (key: string, count: number) => {
  return lookup[key] * count
}

export const lookup: ConversionTable = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
export const modernLookup: ConversionTable =  { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
