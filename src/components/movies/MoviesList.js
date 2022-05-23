import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function MoviesList() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const req = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        req.then(resp => {
            setItems(resp.data);
        });
    }, []);

    if (items === null) {
        return <p>loading Movies</p>;
    }
    return (
        <div className="main">
            <div className="containerTitulo">
                Selecione o filme
            </div>
            <div className="containerList">
                {items.map(item =>
                    <div className="movie">
                        <Link to={`/filme/${item.id}`}>
                            <img src={item.posterURL} />  
                        </Link>
                    </div>)}
            </div>

        </div>
    )
}