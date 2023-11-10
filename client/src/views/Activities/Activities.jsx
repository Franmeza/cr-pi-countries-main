import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions";
import {
  activitiesMainContainer,
  activityCard,
  reloj,
  circleContainer,
  circle,
 
} from "./Activities.module.css";
import Stars from "../../components/ActivityDifficulty/Stars";

// import PropTypes from 'prop-types'
const getRamdonColor = () => {
  const colorClasses = ['#204875', '#FFC759', '#0197F6', '#1AFFD5', '#F24236'];
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};
function Activities() {
  const activities = useSelector((state) => state.allActivities);
  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch()
  
  useEffect(() => {  
    dispatch(getActivities())
    .catch(error => {
      setErrorMessage(error.message)
    } )
  }, [dispatch]);

  return (
    <div className={activitiesMainContainer}>
      {errorMessage && <p>{errorMessage}</p>}
      {activities.map(({ name, difficulty, duration, season }, index) => {
        return (
          <div className={activityCard} key={index}>
            <div className={circleContainer}>
              <div className={circle} style={{backgroundColor: getRamdonColor()}}></div>
              <h1>{name.toUpperCase()}</h1>
            </div>
            <div>
              <Stars filled={difficulty >= 1} />
              <Stars filled={difficulty >= 2} />
              <Stars filled={difficulty >= 3} />
              <Stars filled={difficulty >= 4} />
              <Stars filled={difficulty >= 5} />
            </div>
            <span>Difficulty</span>
            <p>
              <span className={reloj}>&#x1F552;</span> {duration}
            </p>
            <span style={{fontSize: "0.7rem"}}>(hh:mm:ss)</span>
            <span>Duration</span>
            <p>{season}</p>
            <span>Season</span>
          </div>
        );
      })}
    </div>
  );
}

Activities.propTypes = {};

export default Activities;
