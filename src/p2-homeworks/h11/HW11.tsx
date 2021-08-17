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

<h3>Custom Range</h3>
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={changeValue}
                    value1={value1}


                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    firstVal={value1}
                    onChangeRange={changeValue}

                />

            </div>


        </div>
    );
}

export default HW11;
