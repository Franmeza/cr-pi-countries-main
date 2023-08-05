import loader from "../../assets/02-38-04-740_512.gif"
import {loaderContainer} from "./Loader.module.css"

function Loader() {
  return (
    <div className={loaderContainer}>
        <img src={loader} alt="" />
    </div>
  )
}

export default Loader