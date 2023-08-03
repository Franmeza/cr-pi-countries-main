import { useSelector } from "react-redux";
import {
  mainContainer,
  activityCard,
  reloj,
  circleContainer,
  circle,
 
} from "./Activities.module.css";
import Stars from "../../components/ActivityDifficulty/Stars";

// import PropTypes from 'prop-types'
const getRamdonColor = () => {
  const colorClasses = ['#134074', '#FFC759', '#0197F6', '#1AFFD5', '#F24236'];
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};
function Activities() {
  const activities = useSelector((state) => state.allActivities);

  return (
    <div className={mainContainer}>
      {activities.map(({ name, difficulty, duration, season }, index) => {
        return (
          <div className={activityCard} key={index}>
            <div className={circleContainer}>
              <h1>{name}</h1>
              <div className={circle} style={{backgroundColor: getRamdonColor()}}></div>
            </div>
            <div>
              <Stars filled={difficulty >= 1} />
              <Stars filled={difficulty >= 2} />
              <Stars filled={difficulty >= 3} />
              <Stars filled={difficulty >= 4} />
              <Stars filled={difficulty >= 5} />
            </div>
            <span>difficulty</span>
            <p>
              <span className={reloj}>&#x1F552;</span> {duration}
            </p>
            <span>duration</span>
            <p>{season}</p>
            <span>season</span>
          </div>
        );
      })}
    </div>
  );
}

Activities.propTypes = {};

export default Activities;
