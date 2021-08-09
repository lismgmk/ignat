// import React from "react";
//
// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки
//
//     return (
//         <>
//             DoubleRange
//         </>
//     );
// }
//
// export default SuperDoubleRange;

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

type valueType = {
    firstVal: number | number[]

    onChangeRange: (value: number | number[]) => void

}

export default function SuperDoubleRange(props: valueType) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([+props.firstVal, 100]);

    const handleChange = (event: any, newValue: number | number[]) => {
        if (value[0] <= value[1]) {
            setValue(newValue as number[]);
            props.onChangeRange(+value[0])
        } else {
            props.onChangeRange(+value[1])
        }
    };

    return (
        <div className={classes.root}>

            <Slider
                value={[props.firstVal, value[1]] as number[]}
                onChange={handleChange}
                aria-labelledby="range-slider"
                track={false}
                marks={true}
                valueLabelDisplay={"on"}

            />
        </div>
    );
}
