import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Sessions() {
    const { idMovie } = useParams();

    const [items, setItems] = useState(null);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

        req.then(resp => {
            setItems(resp.data);
        });
    }, []);

    if (items === null) {
        return <p>loading Sessions</p>;
    }

    return (
        <div>
            <div className="main">
                <div className="containerTitulo">
                    Selecione o horário
                </div>
                <div className="containerSession">
                    {items.days.map(item =>
                        <div className="session">
                            <p>{item.weekday} - {item.date}</p>
                            <div className="time">
                                {item.showtimes.map(i => 
                                <Link to={`/sessao/${i.id}`} className="buttom">{i.name}</Link>)}
                            </div>
                            
                        </div>)}
                </div>

            </div>
            <Footer 
                posterURL={items.posterURL}
                title={items.title}
            />
            
        </div>
    )
}