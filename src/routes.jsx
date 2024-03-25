import Contact from "./routes/Contact"
import Home from "./routes/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
 
 
 
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
 
export default AppRoutes