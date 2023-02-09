/* eslint-disable quotes */
import { makeStyles } from '@mui/styles'

interface IProps {
  speed: number
}

// const useStyles = makeStyles<Theme, IProps>(
//   () =>
//     createStyles({
//       root: {
//         position: 'relative'
//       },
//       spinImg: {
//         fontWeight: 'bold',
//         animation: () => {('$spin infinite 3s linear')}
//       },
//       '@keyframes spin': {
//         '0%': { transform: 'rotateZ(0deg)' },
//         '50%': { transform: 'rotateZ(180deg)' },
//         '100%': { transform: 'rotateZ(360deg)' }
//       }
//     })
//   // ({
//   //   '@keyframes spin': {
//   //     '0%': { transform: 'rotateZ(0deg)' },
//   //     '50%': { transform: 'rotateZ(180deg)' },
//   //     '100%': { transform: 'rotateZ(360deg)' }
//   //   },
//   //   root: {
//   //     position: 'relative'
//   //   },
//   //   spinImg: {
//   //     background: 'red',
//   //     animation: '$spin infinite 4s linear'
//   //   }
//   // })
// )

export const useAnimationStyles = ({ speed }: IProps) => {
  const classes = makeStyles({
    '@keyframes spin': {
      '0%': { transform: 'rotateZ(0deg)' },
      '50%': { transform: 'rotateZ(180deg)' },
      '100%': { transform: 'rotateZ(360deg)' }
    },
    spinImg: {
      animation: `$spin linear infinite`,
      animationDuration: `${speed}s`
    }
  })

  return classes()
}

// export default useStyles
