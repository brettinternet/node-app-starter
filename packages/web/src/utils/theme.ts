/**
 * Radix color scales https://www.radix-ui.com/docs/colors/palette-composition/the-scales
 *
 * Stitch typing https://stitches.dev/docs/typescript
 */
// import type * as Stitches from '@stitches/react'
import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from '@radix-ui/colors'
// Spread the scales in your light and dark themes
import { createStitches } from '@stitches/react'

/**
 * https://www.radix-ui.com/docs/colors/getting-started/aliasing
 */
const { css, styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...yellow,

      // Scale uses https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
      accentBase: '$blue1',
      accentBgSubtle: '$blue2',
      accentBg: '$blue3',
      accentBgHover: '$blue4',
      accentBgActive: '$blue5',
      accentLine: '$blue6',
      accentBorder: '$blue7',
      accentBorderHover: '$blue8',
      accentSolid: '$blue9',
      accentSolidHover: '$blue10',
      accentText: '$blue11',
      accentTextContrast: '$blue12',

      successBase: '$green1',
      successBgSubtle: '$green2',
      successBg: '$green3',
      successBgHover: '$green4',
      successBgActive: '$green5',
      successLine: '$green6',
      successBorder: '$green7',
      successBorderHover: '$green8',
      successSolid: '$green9',
      successSolidHover: '$green10',
      successText: '$green11',
      successTextContrast: '$green12',

      warningBase: '$yellow1',
      warningBgSubtle: '$yellow2',
      warningBg: '$yellow3',
      warningBgHover: '$yellow4',
      warningBgActive: '$yellow5',
      warningLine: '$yellow6',
      warningBorder: '$yellow7',
      warningBorderHover: '$yellow8',
      warningSolid: '$yellow9',
      warningSolidHover: '$yellow10',
      warningText: '$yellow11',
      warningTextContrast: '$yellow12',

      dangerBase: '$red1',
      dangerBgSubtle: '$red2',
      dangerBg: '$red3',
      dangerBgHover: '$red4',
      dangerBgActive: '$red5',
      dangerLine: '$red6',
      dangerBorder: '$red7',
      dangerBorderHover: '$red8',
      dangerSolid: '$red9',
      dangerSolidHover: '$red10',
      dangerText: '$red11',
      dangerTextContrast: '$red12',
    },
  },
})

export const lightTheme = createTheme({})

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...yellowDark,
  },
})

export { css, styled }

// Use the colors in your styles
const Button = styled('button', {
  backgroundColor: '$blue4',
  color: '$blue11',
  borderColor: '$blue7',
  '&:hover': {
    backgroundColor: '$blue5',
    borderColor: '$blue8',
  },
})
