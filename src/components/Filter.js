import { useSelector } from "react-redux"

import wmrra from './wmrra'
import cascadiaSM from './cascadiaSM'

const Filter = () => {
    const filtered = useSelector(state => state)
    let anecdotes = wmrra.races.concat(cascadiaSM.races)
    console.log('anecdotes', anecdotes)
    console.log('filtered', filtered)
    const filterFunction = (x) => {
      for(let i = 0; i < filtered.filter.length; i++){
        if(x.name.includes(filtered.filter[i])){
          return x
        }
      }
    }
    let anecdotesFiltered = anecdotes.filter(filterFunction)
    //x => x.name.includes(filtered.filter[1])
    console.log('filtered array', anecdotesFiltered)
    console.log('sorted', anecdotesFiltered.sort((a, b) => a.sortDate - b.sortDate))

    const dateFunction = (race) => {
      if(race.date.length === 1){
        return race.date
      }else if(race.date.length ===2){
        return `${race.date[0]}/${race.date[1]}`
      }else if(race.date.length === 3){
        return `${race.date[0]}/${race.date[1]}-${race.date[2]}`
      }
    }

    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        <section>
            filtered list:
            <ul>
            {anecdotesFiltered.map(race =>
            <div key={Math.random()}>
              <li>
                <span>{dateFunction(race)}</span>
                <span> {race.name}</span>
                <span> {race.track}</span>
              </li>
            </div>
              )}
            </ul>
        </section>
      </div>
    )
  }
  
  export default Filter