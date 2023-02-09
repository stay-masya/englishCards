
import About from '../../pages/about'

export const ROUTES: IRoute[] = [
  {
    path: '/about',
    exact: true,
    component: <About />,
    private: true
  }
]
