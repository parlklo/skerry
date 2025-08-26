declare module '@svg-maps/sweden' {
  export interface SwedenLocation {
    id: string
    name: string
    path: string
  }

  const sweden: {
    viewBox: string | number[]
    locations: SwedenLocation[]
  }

  export default sweden
}


