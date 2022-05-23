import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Tickets () {
    const { idSession } = useParams();

    const [items, setItems] = useState(null);
    const [itemsSelected, setItemsSelected] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

        req.then(resp => {
            setItems(resp.data);
        });
    }, []);

    if (items === null) {
        return <p>loading Tickets</p>;
    }


    function Ticket ({id, name, isAvailable}){

        const [selected, setSelected] = useState(false);


        const status = {
            available: "available",
            unavailable: "unavailable",
            selected: "selected"
        }

        return(
            <>
                {!isAvailable ? (
                    <div className={`ticket ${status.unavailable}`}>
                        {name}
                    </div>
                ) : (
                    <div value={selected ? status.selected : status.available} className={`ticket ${selected ? status.selected : status.available}`} onClick={() => {setSelected(!selected)}} onPointerOverCapture={() => {selected ? selectTicket(id): console.log(".")}}>
                        {name}
                    </div>
                )}
            </>
            
        )
    }

    function selectTicket (id){

        let items = itemsSelected;

        items.map(item => {
            if(item === id){
                items.pop(id);
            }else{
                items.push(id);
            }
        })

        setItemsSelected([...items]);
        console.log(itemsSelected);
        
    }

    return (
        <form>
        <div className="main">
            <div className="containerTitulo">
                Selecione o(s) assento(s)
            </div>
            <div className="containerTickets">
                {items.seats.map(item =>
                    
                        <Ticket  key={item.id} id={item.id} name={item.name} isAvailable={item.isAvailable} />
                )}
            </div>

        </div>
        <Footer 
            posterURL={items.movie.posterURL}
            title={items.movie.title}
            weekday={items.day.weekday}
            time={items.name}
            date={items.day.date}
        />
        
        </form>
    )
}