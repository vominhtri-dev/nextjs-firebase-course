import { Box } from "@chakra-ui/react"
import React from "react"
import styles from "../../../styles/banner.module.css"

const BannerHeading = ({ text, ...rest }) => {
    return (
        <Box maxW={["auto", "400"]} height='200' {...rest}>
            <div className={styles.banner__text}>
                <div className={styles.banner__slash}></div>
                {text}
            </div>
            <p className={styles.banner__text}>{text}</p>
            <p className={styles.banner__text}>{text}</p>
        </Box>
    )
}

export default BannerHeading
