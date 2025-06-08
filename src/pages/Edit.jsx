import {useParams} from 'react-router-dom'

const Editor = () => {
    const params = useParams();
    return <div> {params.id}번 일기입니다. Edit </div>
}

export default Edit