import { useSelector, shallowEqual } from "react-redux";
import {countriesContainer} from './Cards.module.css'
import Card from "../Card/Card";

function Cards() {
  const countries = useSelector((state) => state.countries, shallowEqual);

  return (
    <div className={countriesContainer}>
      {countries.map(
        ({id,name,flagImage,continent,capital,subregion,area,population,
        }) => 
           (
            <Card
              key={id}              
              name={name}
              flagImage={flagImage}
              continent={continent}
              capital={capital}
              subregion={subregion}
              area={area}
              population={population}
            />
          )
        
      )}
    </div>
  );
}

export default Cards;
