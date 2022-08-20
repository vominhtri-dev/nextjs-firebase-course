import { Box, Center, FormLabel, IconButton, Text } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { CloseIcon } from '@chakra-ui/icons'

const CusDropFile = ({
    label,
    onchageFile,
    name,
    onErr,
    errMsg,
    prevImg,
    textChoseImg,
}) => {
    const [fileChose, setfileChose] = useState({})
    // Clear image cache
    useEffect(() => {
        return () => fileChose && URL.revokeObjectURL(fileChose)
    }, [])

    // event liten on change input file
    const onDrop = useCallback((file) => {
        onchageFile(file[0])
        const filepreview = URL.createObjectURL(file[0])
        setfileChose(filepreview)
    }, [])

    // Libery hook
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    // Clear image review
    const handleRemoveImage = () => {
        onchageFile(null)
        setfileChose({})
    }

    return (
        <>
            <FormLabel htmlFor={name}>{label || 'Label file'}</FormLabel>
            <Box
                {...getRootProps()}
                bg='gray.200'
                minH='50px'
                rounded='md'
                border='2px'
                borderColor='gray.300'
                pos='relative'
                // my='4'
                my='2'
                borderStyle='dashed'
            >
                <input {...getInputProps()} id={name} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <Center
                        cursor='pointer'
                        fontSize='sm'
                        h='50px'
                        lineHeight='50px'
                    >
                        {textChoseImg || 'Bấm vào để chọn hình'}
                    </Center>
                )}
            </Box>

            {Object.getOwnPropertyNames(fileChose).length !== 0 && (
                <>
                    {prevImg && <Text>Hình mới</Text>}
                    <Box
                        mt='2'
                        h='200'
                        pos='relative'
                        rounded='xl'
                        overflow='hidden'
                        border='2px'
                        borderColor='gray.300'
                    >
                        <IconButton
                            rounded='full'
                            icon={<CloseIcon />}
                            pos='absolute'
                            right='4'
                            top='4'
                            zIndex='2'
                            size='sm'
                            onClick={handleRemoveImage}
                            colorScheme='red'
                        />

                        <Image
                            onLoad={() => URL.revokeObjectURL(fileChose)}
                            src={fileChose}
                            alt='file_review'
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </Box>
                </>
            )}

            {prevImg && (
                <>
                    <Text>Hình cũ</Text>
                    <Box
                        my='2'
                        h='200'
                        pos='relative'
                        rounded='xl'
                        overflow='hidden'
                        border='2px'
                        borderColor='gray.300'
                    >
                        <Image
                            src={prevImg}
                            alt='file_old_review'
                            layout='fill'
                            objectFit='cover'
                            priority='true'
                        />
                    </Box>
                </>
            )}

            {onErr && (
                <Text color='red.500'>{errMsg || 'Hình chưa được chọn'}</Text>
            )}
        </>
    )
}

export default CusDropFile
