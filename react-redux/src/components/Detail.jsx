import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation().pathname;

    return(
        <div>
            <h1>{location.split('/')[1]}</h1>
        </div>
    )
}

export default Detail;