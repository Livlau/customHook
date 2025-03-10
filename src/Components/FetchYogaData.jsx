import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
            <ul class="list_data_main">
            {data && data.map(e=>(
                <>
                    <li className='list_data'>
                        <h3>{e.name}</h3>
                        <p><strong>Importance: </strong>{e.importance}</p>
                        <p><strong>Benefits: </strong>{e.benefits}</p>
                        <p><strong>Time to eat: </strong>{e.time_duration}</p>
                    </li>
                </>
            ))}
                
            </ul>

        </>
    )
}

export default FetchYogaData