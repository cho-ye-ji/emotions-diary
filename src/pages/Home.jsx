import {useState, useContext} from 'react';
import { DiaryStateContext } from '../App';

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

//해당 달(이번달) 안에 일기를 불러오기 위한 이벤트 핸들러
const getMonthlyData = (pivotDate, data) => {

    const beginTime = new Date(
        pivotDate.getFullYear(), 
        pivotDate.getMonth(), 
        1,
        0,
        0,
        0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {   
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log(monthlyData);

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    };

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    )
}



export default Home;