import React from 'react';
import { Accordion } from 'react-bootstrap';
import FilterBTN from './FilterBTN';

function SideNavbar({ setPageNumber, setStatus, setSpecies, setGender }) {

  var status = ['Alive', 'Dead', 'unknown'];
  var species = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'];
  var gender = ['Male', 'Female', 'Genderless', 'Unknown']
  return (
    <div style={{marginLeft:'25%'}}>
      <h6 style={{textAlign:'center'}}>Filter</h6>
      <p
        onClick={() => {
          setPageNumber(1);
          setStatus('');
          setSpecies('');
          setGender('');
          window.location.reload(false);
        }} 
        style={{textDecoration:'underline', color:'#0b5ed7', cursor:'pointer', textAlign:'center'}}
      >
        Clear Filters
      </p>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Status</Accordion.Header>
          <Accordion.Body className='d-flex flex-wrap gap-3'>
            {status.map((items, index) => 
              <FilterBTN key={index} items={items} name='status' index={index} setPageNumber={setPageNumber} task={setStatus} />
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Species</Accordion.Header>
          <Accordion.Body className='d-flex flex-wrap gap-3'>
            {species.map((items, index) => 
              <FilterBTN key={index} items={items} name='species' index={index} setPageNumber={setPageNumber} task={setSpecies} />
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body className='d-flex flex-wrap gap-3'>
            {gender.map((items, index) => 
              <FilterBTN key={index} items={items} name='gender' index={index} setPageNumber={setPageNumber} task={setGender} />
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default SideNavbar;
