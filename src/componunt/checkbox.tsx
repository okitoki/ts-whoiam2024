import React from 'react';
import { CheckBoxProbs } from '../model/type';
import { Stylebox } from '../css/common';

interface OnProbs extends CheckBoxProbs {

  onChangeHandler(event:React.ChangeEvent<HTMLInputElement>):void,

}




function CheckBox({name, label, checkstate, checkId, onChangeHandler}:OnProbs) {






        return (
            <>
            <Stylebox>{label}</Stylebox>

                <label htmlFor="yes">yes</label><input type="radio" value="yes" id="yes" name={checkId} onChange={onChangeHandler}/>
                <label htmlFor="no">no</label><input type="radio" value="no" id="no" name={checkId} onChange={onChangeHandler}/>

            </>
        );

}

export default CheckBox;