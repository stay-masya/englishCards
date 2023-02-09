import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// import { Box } from '@mui/material'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

// import { Card } from './components/card'

// import logo from './logo.png'
import Router from './routes'
// import { cartMok } from './utils/constants/cart'
import { theme } from './utils/constants/ui'

import './App.css'
// import { CacheProvider, ThemeProvider } from '@emotion/react'

function App() {
  // const [item, setItem] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((json) => setItem(json))
  // }, [])

  const muiCache = createCache({
    key: 'mui',
    prepend: true
  })

  return (
    <div className='App'>
      {/* <Card card={cartMok} />
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {item.map((el: any, index) => (
            <p key={index}>{el.title}</p>
          ))}
        </div>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div> */}

      <BrowserRouter>
        {/* <Provider store={store}> */}
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </CacheProvider>
        {/* </Provider> */}
      </BrowserRouter>
    </div>
  )
}

export default App
