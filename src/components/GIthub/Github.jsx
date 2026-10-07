import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    // const [data , setData ] = useState([]);
    // useEffect(
    //     () => {
    //         fetch("https://api.github.com/users/Subhajit-Bose")
    //         .then( res => res.json() )
    //         .then( data => setData(data) )
    //     },[]
    // )

    const data = useLoaderData()

  return (
    <div className='bg-gray-800 text-white text-4xl px-5 py-2 text-center'>
        <h1>Github User : {data.login}</h1> 
        <br></br>
        Github Repositories : {data.public_repos}
        <img className='content-center' src={data.avatar_url} alt="Github Profile Pic" width={300}/>
    </div>
  )
}

export default Github

export const GithubInfo = async() => {
    const resp = await fetch("https://api.github.com/users/Subhajit-Bose")
    return resp.json()
}