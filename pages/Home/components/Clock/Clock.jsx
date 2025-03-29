import { View , Text} from 'react-native';
import {s} from './Clock.style';
import { nowToHHMM } from '../../../../services/date.service';
import Txt from '../../../../components/Txt';
import { useEffect, useState } from 'react';

export default function Clock() {

    const [time, setTime] = useState(nowToHHMM());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }, 10000);

        return () => clearInterval(interval);
    
    }, []);


    return (
      
        <Txt style={s.time}>{time}</Txt>
     
    );
};