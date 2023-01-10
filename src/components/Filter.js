import { useSelector } from "react-redux"
import wmrra from './orgs/wmrra'
import cascadiaSM from './orgs/cascadia_Super_Moto'
import puyallup from './orgs/puyallup'
import UTAHSBA_SuperMoto from './orgs/UTAHSBA_SuperMoto'
import './css/filter.css'
import wtd from './orgs/2wtd.js'

const Filter = () => {
    const filtered = useSelector(state => state)
    //These are all the racing orgs
    let anecdotes = wmrra.races.concat(cascadiaSM.races.concat(puyallup.races.concat(wtd.races.concat(UTAHSBA_SuperMoto.races))))
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
            <ul className="filterUL">
            {anecdotesFiltered.map(race =>
            <div key={Math.random()} className="list_div">
              <li className="filterLI">
                <span className="raceDate">{dateFunction(race)} -</span>
                <span> {race.name.replace(/_/g,' ')} - </span>
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