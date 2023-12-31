import axios from 'axios'

export const imageUpload = async image=>{
    const fromData = new FormData()
    fromData.append('image',image)
    const {data} = await axios.post(
            `https://api.imgbb.com/1/upload?key=${
                '5f2392a5712f1aa41c22a6e58d128ac1'
            }`,
            fromData
        )
        return data
}