import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)

    //         })
    // })

    return (
        <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>
            Github Followers :{data.followers}
            <img className='ml-96' src={data.avatar_url} alt="" width={250} />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    console.log(response);
    return response.json()

}
