import { BrowserRouter,Routes,Route } from "react-router-dom";
import Popular from "../pages/popular";
import Upcoming from "../pages/upcoming";
import Toprated from "../pages/top-rated";


export default function NavBar(){
    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/home' element={<p>hello</p>}/>
                <Route  path='/top-rated' element={<Toprated></Toprated>}/>
                <Route path='/upcoming' element={<Upcoming></Upcoming>}/>
                <Route path='/popular' element={<Popular></Popular>}/>
            </Routes>
          </BrowserRouter>
        </div>
    )
}