import { useEffect, useState } from "react"

function PreviewAvatar (){
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        return () =>  URL.revokeObjectURL(avatar?.preview)
     }, [avatar])
    

    const handlePreview = (e) => {
        const file = e.target.files[0]      
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    

    return(
        <div>
        <input type  = "file"
        //mutiple để lấy nhiều ảnh
        onChange={handlePreview}
        />
        {avatar && (
            <img src={avatar.preview} alt="avatar" />
    )}
        </div>
    )




}
export default PreviewAvatar