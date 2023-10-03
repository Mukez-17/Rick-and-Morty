import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import MainCard from '../Components/MainCard';
import InputGroup from '../Components/InputGroup';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Episodes = () => {

    var [id, setId] = useState(1);
    var [results, setResults] = useState([]);
    var [isLoading, setIsLoading] = useState(true);
    var [fetchData, updateFetchData] = useState([]);
    var {name, air_date} = fetchData;

    var [width, setWidth] = useState(window.innerWidth);
    var [buttonVisible, setButtonVisible] = useState(false);

    var api = `https://rickandmortyapi.com/api/episode/${id}`;

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
                data.characters.map((item) => (
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
                <h2 style={{textAlign:'center', marginBottom:'24px'}}>Episode : {' '} <span style={{color:'#0b5ed7'}}>{name === '' ? 'Unknown' : name}</span></h2>
                <h5 style={{textAlign:'center', marginBottom:'24px'}}>Air Date {air_date === '' ? 'Unknown' : air_date}</h5>
                <Col lg={3}>
                    <div style={{marginLeft:'25%'}}>
                        <h4 style={{textAlign:'center'}}>Pick Episodes</h4>
                        <InputGroup name='Episode' total={51} setId={setId} />
                    </div>
                </Col>
                <Col lg={8}>
                    <Row>
                        <MainCard page='/episodes/' results={results} isLoading={isLoading} />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Episodes;