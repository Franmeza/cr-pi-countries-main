import {sidePanelMobile} from "./SidePanelMobile.module.css"

function SidePanelMobile() {
  return (
    <section >
       
    <div className={sidePanelMobile}>
    <div>
      <h4>Filter by</h4>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Continent</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Activiy</label>
    </div>

    <div>
      <h4>Order by:</h4>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Name</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Population</label>
    </div>

    </div>
  </section>
  )
}

export default SidePanelMobile