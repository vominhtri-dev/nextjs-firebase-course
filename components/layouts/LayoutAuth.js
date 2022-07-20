import { Box, Grid, GridItem, Image } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import BannerHeading from "../pages/home/BannerHeading"

const LayoutAuth = ({ children }) => {
    return (
        <Box>
            <Grid gridTemplateColumns={"repeat(12,1fr)"}>
                <GridItem
                    colSpan={["0", "0", "4", "6"]}
                    alignItems='center'
                    minH='100vh'
                    pos='relative'
                    bgColor='#4549e0'
                    display={["none", "none", "flex"]}
                    color='white'
                >
                    <Box
                        pos='absolute'
                        top='4'
                        left='4'
                        display='flex'
                        alignItems='center'
                    >
                        <Image
                            src={"./favicon.png"}
                            width='40px'
                            height='40px'
                            property='fill'
                            mr='4'
                            alt='logo'
                        />
                        <Link href='/'>TRIDEV.IO</Link>
                    </Box>
                    <Box w='80%' mt='0' ml='10%' p='8'>
                        <BannerHeading
                            text='Tridev.io'
                            transition='0.5s'
                            whiteSpace='nowrap'
                            transform={{
                                md: "rotate(90deg) translateX(-100px)",
                                lg: "rotate(0)",
                            }}
                        />
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={["12", "12", "8", "6"]}
                    h='100vh'
                    bgColor='white'
                    zIndex='4'
                >
                    <Box w='80%' mt='100' ml='10%'>
                        {children}
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default LayoutAuth
