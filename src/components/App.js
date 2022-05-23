import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./header/Header";
import MoviesList from "./movies/MoviesList";
import Sessions from "./movies/Sessions";
import Tickets from "./movies/Tickets";



export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MoviesList />}/>
                <Route path="/filme/:idMovie" element={<Sessions />}/>
                <Route path="/sessao/:idSession" element={<Tickets />}/>
            </Routes>
        </BrowserRouter>
    );
}