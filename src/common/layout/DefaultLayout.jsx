import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export const DefaultLayout = () => {
    return (
        <>
            <Nav />

            <Outlet />
            <Footer />
        </>
    )
}
