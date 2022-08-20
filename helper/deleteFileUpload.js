import { deleteObject, ref } from 'firebase/storage'
import { storage } from '../firebase.config'

export default async function deleteFileUpload(file) {
    const imageRef = ref(storage, file)
    return deleteObject(imageRef)
}
