import { useSelector } from "react-redux"

// import PropTypes from 'prop-types'
function Activities() {

  const activities = useSelector((state)=> state.allActivities)
  

  return (
    <div>
      <ul>
        {activities.map(({name,difficulty,duration,season}, index)=>{
          return (
            <div key={index}>
              <li >{name}</li>
              <li >{difficulty}</li>
              <li >{duration}</li>
              <li >{season}</li>
            </div>        
          )
        })          
        }
      </ul>
    </div>
  )
}

Activities.propTypes = {}

export default Activities
