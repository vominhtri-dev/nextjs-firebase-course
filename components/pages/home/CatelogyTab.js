import {
    Container,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useBreakpointValue,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsThreeDots } from "react-icons/bs"

export default function CatelogyTab() {
    const data = [
        "Design UX - UI",
        "Web development",
        "Programing",
        "Mobile development",
        "Tip & Trick",
        "Database",
        "Game development",
        "Network",
    ]
    const breakPoint = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 5 })

    const [activeTab, setActiveTab] = useState(2)
    return (
        <Flex bg='white' alignItems='center'>
            <Container maxW={[1024]}>
                <Grid templateColumns='repeat(16, 1fr)'>
                    {data.map(
                        (tab, idx) =>
                            idx < breakPoint && (
                                <GridItem
                                    key={idx}
                                    textAlign='center'
                                    p='4'
                                    cursor='pointer'
                                    colSpan={["15", "7", "5", "3"]}
                                    onClick={() => setActiveTab(idx + 1)}
                                    color={
                                        activeTab === idx + 1 && "messenger.600"
                                    }
                                    borderBottom='2px'
                                    borderBottomColor={
                                        activeTab === idx + 1
                                            ? "messenger.600"
                                            : "gray.100"
                                    }
                                >
                                    {tab}
                                </GridItem>
                            )
                    )}
                    <GridItem p='4' colSpan={{ sm: "2", md: "1" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                size='sm'
                                colorScheme='messenger'
                                aria-label='show-more'
                                icon={<BsThreeDots />}
                            ></MenuButton>
                            <MenuList p='2' pos='absolute' right='-8'>
                                {data.map(
                                    (tab, idx) =>
                                        idx > breakPoint && (
                                            <MenuItem
                                                key={idx}
                                                cursor='pointer'
                                            >
                                                {tab}
                                            </MenuItem>
                                        )
                                )}
                            </MenuList>
                        </Menu>
                    </GridItem>
                </Grid>
            </Container>
        </Flex>
    )
}
