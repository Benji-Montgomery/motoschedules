import { useDispatch, useSelector } from "react-redux"
import { manageFilter, removalFilter } from "../reducers/filterReducer"
import Filter from "../components/Filter"
import './css/schedule.css'

const Schedule = () => {
    const dispatch = useDispatch()

    const handleFilter = (raceOrg) => {
        if(currentState.filter.includes(raceOrg)){
            console.log('woopyieya')
            dispatch(removalFilter(raceOrg))
        }else{
        console.log(raceOrg)
        dispatch(manageFilter(raceOrg))
        }
    }
    const handleFilterAll = () => {
        dispatch(manageFilter('Cascadia_Super_Moto'))
        dispatch(manageFilter('Puyallup_Flat_Track'))
        dispatch(manageFilter('UTAHSBA_SuperMoto'))
        dispatch(manageFilter('WMRRA'))
        dispatch(manageFilter('2WTD_mini_racing'))
    }
    const currentState = useSelector(state => state)
    console.log('currentstate', currentState)
    const buttonStyler = (raceorg) => {
        if(currentState.filter.includes(raceorg)){
            return { background: '#04a6d1' }
        }
    }
    return(
        <section>
            <section>
                <button style={buttonStyler('2WTD_mini_racing')} onClick={() => handleFilter('2WTD_mini_racing')}>2WTD Mini Racing</button>
                <button style={buttonStyler('Cascadia_Super_Moto')} onClick={() => handleFilter('Cascadia_Super_Moto')}>Cascadia Super Moto</button>
                <button style={buttonStyler('Puyallup_Flat_Track')} onClick={() => handleFilter('Puyallup_Flat_Track')}>Puyallup Flat Track</button>
                <button style={buttonStyler('UTAHSBA_SuperMoto')} onClick={() => handleFilter('UTAHSBA_SuperMoto')}>UTAHSBA Super Moto</button>
                <button style={buttonStyler('WMRRA')} onClick={() => handleFilter('WMRRA')}>WMRRA</button>
                <button onClick={() => handleFilter()}>CLEAR</button>
                <button onClick={() => handleFilterAll()}>ALL</button>
            </section>
            <section>
                <Filter />
            </section>
        </section>
    )
}


export default Schedule;