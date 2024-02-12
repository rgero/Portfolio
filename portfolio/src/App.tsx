import './styles/App.css'

import { ProjectList } from './data/dummyProject'

const App = () => {

  return (
    <>
      {ProjectList.map( (entry) => {
        return (
          <div>
            <div>{entry.name}</div>
            <div>{entry.description}</div>
            <hr/>
          </div>
        )
      })}
    </>
  )
}

export default App
