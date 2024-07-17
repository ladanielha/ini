import Formbobotmsaw from "./Formbobotmsaw";
import Formbobotmahp from "./Formbobotmahp";
import { useState } from "react";

const Cekrekomendasimakanan = ({ props }) => {

    const [showFormbobot, setShowFormbobot] = useState(false);
  
    const handleRekomendasiClick = () => {
        setShowFormbobot(true);
      };
    
    if (props.kota === 'Cirebon') {
        // Render something when props.kota is equal to 'someValue'
        return <div>
        <button onClick={handleRekomendasiClick} className="btn btn-primary">
          Rekomendasi
        </button>
        {showFormbobot && <Formbobotmahp props={props} setShowFormbobot={setShowFormbobot} />}
      </div>
    } else {
        // Render something else when props.kota is not equal to 'someValue'
        return <div>
        <button onClick={handleRekomendasiClick} className="btn btn-primary">
          Rekomendasi
        </button>
        {showFormbobot && <Formbobotmsaw props={props} setShowFormbobot={setShowFormbobot} />}
      </div>
    }

   
}
export default Cekrekomendasimakanan