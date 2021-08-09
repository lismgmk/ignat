import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState<number|number[]>(0);


    const changeValue = (k: number| number[]) => {
        setValue1(k)
    }


    return (
        <div>
            <hr/>
            homeworks 11


            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={changeValue}
                    value1={value1}


                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    firstVal={value1}
                    onChangeRange={changeValue}

                    // сделать так чтоб value1 и value2 изменялось
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
