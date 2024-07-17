import { useState } from "react";
import Formbobotwsaw from "./Formbobotwsaw";
import Formbobot from "./Formbobot";

const Cekrekomendasi = ({ props }) => {
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
        {showFormbobot && <Formbobot props={props} setShowFormbobot={setShowFormbobot} />}
      </div>
    } else {
        // Render something else when props.kota is not equal to 'someValue'
        return <div>
        <button onClick={handleRekomendasiClick} className="btn btn-primary">
          Rekomendasi
        </button>
        {showFormbobot && <Formbobotwsaw props={props} setShowFormbobot={setShowFormbobot} />}
      </div>
    }
}
export default Cekrekomendasi
