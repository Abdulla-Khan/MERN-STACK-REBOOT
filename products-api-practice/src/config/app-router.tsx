import { BrowserRouter, Route, Routes } from "react-router-dom"
import ApiHandlingScreen from "../pages/apicalling"
import About from "../pages/about"
import Home from "../pages/home"
import { SingleBed } from "@mui/icons-material"
import SingleProduct from "../pages/single-product"

function Router() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ApiHandlingScreen />} />
                <Route path="products/:id" element={<SingleProduct />} />
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />

            </Routes></BrowserRouter >


    </>
}

export default Router;