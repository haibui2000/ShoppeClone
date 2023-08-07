import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  const Abv = "day la kiem tra chuc nang hoat dong dung khong?s"
  return <div>{routeElements}</div>
}
export default App
