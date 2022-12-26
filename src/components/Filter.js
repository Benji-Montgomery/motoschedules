import { useSelector } from "react-redux"
import wmrra from './orgs/wmrra'
import cascadiaSM from './orgs/cascadiaSM'
import puyallup from './orgs/puyallup'
import './css/filter.css'
import wtd from './orgs/2wtd.js'

const Filter = () => {
    const filtered = useSelector(state => state)
    let anecdotes = wmrra.races.concat(cascadiaSM.races.concat(puyallup.races.concat(wtd.races)))
    const filterFunction = (x) => {
      for(let i = 0; i < filtered.filter.length; i++){
        if(x.name.includes(filtered.filter[i])){
          return x
        }
      }
    }
    let anecdotesFiltered = anecdotes.filter(filterFunction)
    anecdotesFiltered.sort((a, b) => a.sortDate - b.sortDate)

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
            <div key={Math.random()} class="list_div">
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