import { useDispatch } from "react-redux"
import { manageFilter } from "../reducers/filterReducer"
import Filter from "../components/Filter"

const Schedule = () => {
    const dispatch = useDispatch()

    const handleFilter = (raceOrg) => {
        console.log(raceOrg)
        dispatch(manageFilter(raceOrg))
    }

    const handleReset = () =>{
        dispatch(manageFilter())
    }

    return(
        <section>
            <section>
                <button onClick={() => handleFilter('WMRRA')}>wmrra</button>
                <button onClick={() => handleFilter('CascadiaSM')}>cascadia</button>
                <button onClick={() => handleReset()}>CLEAR</button>
            </section>
            <section>
                <Filter />
            </section>
        </section>
    )
}


export default Schedule;