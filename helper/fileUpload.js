import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { storage } from '../firebase.config'

export default async function fileUpload(file) {
    const imageRef = ref(storage, `images/${file.name + v4()}`)
    const fileRef = await uploadBytes(imageRef, file)
    return getDownloadURL(fileRef.ref)
}
