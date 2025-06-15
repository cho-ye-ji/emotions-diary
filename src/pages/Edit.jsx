import { useParams,useNavigate, replace } from 'react-router-dom'
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext,useEffect,useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate(); 
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();

    useEffect(()=>{
        //다이어리 데이터 끌어오기
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id) 
        );
        if (!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }

        setCurrentDiaryItem(currentDiaryItem);
    },[params.id]);
    //[params.id, data] => 이전 코드, 의존성 배열 삭제(24.11.22 이후)

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