import { useParams,useNavigate, replace } from 'react-router-dom'
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../hooks/useDiary';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate(); 
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    
    const currentDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if(
            window.confirm("일기를 정말 삭제하겠습니까? 다시 복구되지 않습니다.")
        ){
            //일기 삭제 로직
            onDelete(params.id);
            nav("/", { replace: true });
        }
    };

    const onSubmit = (input) => {
        if( window.confirm("일기를 정말 수정할까요?")){
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotionId, 
                input.content
            );
            nav("/", {replace: true});
        }
    };

    return <div> 
        <Header 
            title={"일기 수정하기"}
            leftChild={
                <Button onClick={()=>nav(-1)} text={'< 뒤로가기'}/>
            }
            rightChild={
                <Button 
                    onClick={onClickDelete}
                    text={'삭제하기'} 
                    type={"NAGATIVE"}
                />
            }
        />
        <Editor 
            initData={currentDiaryItem} 
            onSubmit={onSubmit} />
    </div>
}

export default Edit;