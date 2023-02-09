import { makeStyles } from '@mui/styles'

import Ekler from '../../assets/homePage/Ekler3.png'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 30px)',
    padding: 15,
    background: '#c2330d',
    position: 'relative'
  },
  eclerContainer: {
    margin: '-15px',
    marginBottom: 0
  },
  logo: {
    background: `url(${Ekler}) no-repeat center`,
    backgroundSize: 'cover',
    maskImage:
      '-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 100%)',
    padding: '50%'
  },
  content: {
    background: '#FFFFFF',
    padding: 10,
    borderRadius: '60px 60px 0 0',
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default useStyles
