import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 30
  },
  cardItem: {
    display: 'flex',
    width: '140px',
    height: '140px',
    boxShadow: '6px 11px 10px #c2330d9c',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '35px',
    color: '#333',
    fontSize: '26px',
    fontWeight: 'bold',
    '& svg': {
      height: '55px',
      width: 'auto'
    }
  }
}))

export default useStyles
