import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
export const DefaultLayout = () =>{
    return (
        <>
            <Nav />

            {  <Outlet /> }
            {/* <Footer /> */}
        </>
    )
}
