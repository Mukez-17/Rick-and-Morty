import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import InputGroup from '../Components/InputGroup';
import MainCard from '../Components/MainCard';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Locations = () => {

    var [id, setId] = useState(1);
    var [results, setResults] = useState([]);
    var [isLoading, setIsLoading] = useState(true);
    var [fetchData, updateFetchData] = useState([]);
    var {name, dimension, type} = fetchData;

    var [width, setWidth] = useState(window.innerWidth);
    var [buttonVisible, setButtonVisible] = useState(false);

    var api = `https://rickandmortyapi.com/api/location/${id}`;

    var updateDimensions = () => {
        setWidth(window.innerWidth);
      }

    var handleScroll = () => {
        const isAtTop = window.scrollY <= 15;
    
        setButtonVisible(!isAtTop);
    }

    useEffect(() => {
        async function fetchdata(){
        var data = await fetch(api).then((res)=>res.json());
        updateFetchData(data);
    
        var a = await Promise.all(
            data.residents.map((item) => (
            fetch(item).then((res) => res.json())
            ))
        );
        setResults(a);
        setIsLoading(false);
        };

        setTimeout(fetchdata, 1000);

        window.addEventListener('resize', updateDimensions);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', updateDimensions);
            window.removeEventListener("scroll",handleScroll);
        };
    }, [api])

    return (
        <>
            <div 
                style={{
                display: width < 576 && buttonVisible ? 'block' : 'none',
                position: "fixed",
                zIndex:"1",
                bottom:'10px',
                right:'10px'
                }}
            >
                <Button 
                    style={{
                        color:'#000', 
                        backgroundColor:'rgba(0, 0, 0, 0.075)', 
                        borderColor:'rgba(0, 0, 0, 0.075)', 
                        padding:'0', 
                        width:'40px', 
                        height:'40px', 
                        borderRadius:'40px'
                    }}
                    onClick={() => window.scrollTo({top:'0', behavior:'smooth'})}
                >
                    <KeyboardArrowUpOutlinedIcon style={{width:'35px', height:'35px'}} />
                </Button>
            </div>
            <Row style={{margin:'25px 0 0'}}>
                <h2 
                    style={{textAlign:'center', marginBottom:'24px'}}
                >
                    Location : {' '} <span style={{color:'#0b5ed7'}}>{name === '' ? 'Unknown' : name}</span>
                </h2>
                <h5 
                    style={{textAlign:'center', marginBottom:'24px'}}
                >
                    Dimension: {dimension === '' ? 'Unknown' : dimension}
                </h5>
                <h6 
                    style={{textAlign:'center', marginBottom:'24px'}}
                >
                    Type: {type === '' ? 'Unknown' : type}
                </h6>
                <Col lg={3}>
                    <div style={{marginLeft:'25%'}}>
                        <h4 style={{textAlign:'center'}}>Pick Episodes</h4>
                        <InputGroup name='Location' total={126} setId={setId} />
                    </div>
                </Col>
                <Col lg={8}>
                    <Row>
                        <MainCard page='/locations/' results={results} isLoading={isLoading} />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Locations;