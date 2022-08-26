import { Box, Grid, GridItem } from '@chakra-ui/react'
import ProfileAside from './ProfileAside'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
    return (
        <Box minH='400' pos='relative' py='4'>
            <Box
                w='100%'
                h='170'
                bgGradient='linear(to-r, #4549e0,#4549e0, #4549e0,#805AD5)'
                rounded='md'
                my='4'
                zIndex='1'
                pos='absolute'
                top='0'
            />
            <Grid gridTemplateColumns='repeat(12, 1fr)' gap='4' p='4' w='full'>
                <GridItem
                    colSpan={['12', '12', '4']}
                    p='4'
                    zIndex='2'
                    bg='white'
                    rounded='md'
                    shadow='md'
                >
                    {/* Menu Link  */}
                    <ProfileAside />
                </GridItem>
                <GridItem
                    colSpan={['12', '12', '8']}
                    p='4'
                    bg='white'
                    zIndex='2'
                    rounded='md'
                    shadow='md'
                >
                    {/* Content */}
                    <ProfileContent />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default ProfileContainer
