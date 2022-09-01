import React from 'react'
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react'
import LoginForm from './LoginForm'

const RequiredAuth = ({ titleBtn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} size='sm' w='full'>
                {titleBtn || 'Yêu cầu đăng nhập'}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{titleBtn || ''}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <LoginForm />
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    )
}

export default RequiredAuth
