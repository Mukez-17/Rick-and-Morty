import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const CardDetails = () => {

    var { id } = useParams();
    var [fetchData, updateFetchData] = useState([]);
    var {name, image, status, gender, species, type, location, origin} = fetchData;

    var api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function(){
            var data = await fetch(api).then((res) => res.json());
            updateFetchData(data);
        })();
    },[api])

    return (
        <div className='d-flex justify-content-center'>
            <div className="d-flex flex-column gap-2">
                <h1 style={{textAlign:'center', margin:'20px 0 10px'}}>{name}</h1>
                <img src={image} alt={name} className='img-fluid' />
                <Badge 
                    className={`bg-${status === 'Alive' ? 'success' : (status === 'Dead' ? 'danger' : 'secondary')} fs-5`} 
                    style={{right:'3px', top:'3px'}}
                >
                    {status}
                </Badge>
                <div className="content">
                    <div className="">
                        <span className="fw-bold">Gender : </span>
                        {gender}
                    </div>
                    <div className="">
                        <span className="fw-bold">Species : </span>
                        {species}
                    </div>
                    <div className="">
                        <span className="fw-bold">Type : </span>
                        {type === '' ? 'Unknown' : type}
                    </div>
                    <div className="">
                        <span className="fw-bold">Location : </span>
                        {location?.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin : </span>
                        {origin?.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails