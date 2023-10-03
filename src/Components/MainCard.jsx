import React from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainCard = ({ page, results, isLoading }) => {

    let display;

    if(isLoading){
        display='Loading Data...'
    }
    else{
        if(results){
            if(results.length > 0){
                display = results.map((i) => {
                    return (
                        <Col xl={4} lg={6} md={6} key={i.id} style={{position:'relative', display:'flex', justifyContent:'center'}}>
                            <Link to={`${page}${i.id}`} style={{textDecoration:'none'}}>
                                <Card style={{width: '19.5rem', marginBottom:'20px', border:'2px Solid #0b5ed7'}}>
                                    <Card.Img variant="top" src={i.image} alt={i.name} />
                                    <Card.Body style={{padding:'10px'}}>
                                        <div style={{fontSize:'20px', fontWeight:'bold', marginBottom:'13px'}}>{i.name}</div>
                                        <div style={{fontSize:'16px'}}>Last Location</div>
                                        <div style={{fontSize:'17px', fontWeight:'600'}}>{i.location.name}</div>
                                    </Card.Body>
                                    <Badge 
                                        className={
                                            `position-absolute 
                                            bg-${i.status === 'Alive' ? 'success' : (i.status === 'Dead' ? 'danger' : 'secondary')}`
                                        } 
                                        style={{right:'3px', top:'3px'}}
                                    >
                                        {i.status}
                                    </Badge>
                                </Card>
                            </Link>
                        </Col>
                    )   
                })
            }
            else{
                display = 'No Characters found :('
            }
        }
        else{
            display = 'No Characters found :('
        }
    }

  return (
    <>{display}</>
  )
}

export default MainCard;