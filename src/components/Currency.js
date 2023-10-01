import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className=' input-group mb-3'  >
        <label style={{backgroundColor: "#96e29c"}} class="input-group-text" for="inputGroupSelect01">Currency</label> {
            
      <select name="Currency" class="form-select" id="inputGroupSelect01" style={{backgroundColor: "#96e29c"}}  onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">Pound(£)</option>
        <option value="₹">Roupie(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="$">Dollar($)</option>
      </select>	

      
      }	

     

     
    </div>
    );
};

export default Currency;