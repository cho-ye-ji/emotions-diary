import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();

    return <div> Home 위치! </div>
}

export default Home;