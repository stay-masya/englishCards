declare interface IRoute {
  path: string
  exact: boolean
  component: ReactNode
  private: boolean
}
