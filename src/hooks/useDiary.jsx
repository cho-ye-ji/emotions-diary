import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(()=>{
        //다이어리 데이터 끌어오기
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id) 
        );
        if (!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }

        setCurrentDiaryItem(currentDiaryItem);
    }, [id]);
    //[params.id, data] => 이전 코드, 의존성 배열 삭제(24.11.22 이후)
    //[params.id] 로 수정

    return currentDiaryItem;
};

export default useDiary;