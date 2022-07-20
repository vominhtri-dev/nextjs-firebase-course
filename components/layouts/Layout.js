import React from "react"
import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <Box bg='ghostwhite'>
            <Navbar />
            <Box pt='70px'> {children}</Box>
            <Footer />
        </Box>
    )
}
