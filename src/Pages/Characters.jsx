import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CharactersSide from '../Components/CharactersSide';
import MainCard from '../Components/MainCard';
import ReactPaginate from 'react-paginate';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Characters() {

  var [pageNumber, setPageNumber] = useState(1);
  var [search, setSearch] = useState("");
  var [status, setStatus] = useState("");
  var [species, setSpecies] = useState("");
  var [gender, setGender] = useState("");
  var [isLoading, setIsLoading] = useState(true);
  var [fetchData, updateFetchData] = useState([]);
  var {info, results} = fetchData;

  var [width, setWidth] = useState(window.innerWidth);
  var [buttonVisible, setButtonVisible] = useState(false);

  var api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  var updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  var handleScroll = () => {
    const isAtTop = window.scrollY <= 15;
    const isAtBottom = Math.round(window.scrollY + window.innerHeight + 15) >= document.documentElement.scrollHeight;

    setButtonVisible(!isAtTop && !isAtBottom);
  }

  useEffect(()=>{
    async function fetchdata(){
      var data = await fetch(api).then((res)=>res.json());
      updateFetchData(data);
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
        <h2 style={{textAlign:'center', fontWeight:'700'}}>Characters</h2>
        <form className="d-flex justify-content-center mt-3 mb-5" onSubmit={(e) => e.preventDefault()}>
          <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value)
            }}
            type="search"
            placeholder="Search for Characters"
            className='me-2'
            style={{width:'40%', border:'2px Solid #0b5ed7', borderRadius:'8px', padding:'10px 15px', boxShadow:'1px 3px 9px gray'}}
          />
          <Button onClick={e=>e.preventDefault} style={{boxShadow:'1px 3px 9px gray'}}>Search</Button>
        </form>
        <Col lg={3}>
          <CharactersSide setPageNumber={setPageNumber} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} />
        </Col>
        <Col lg={8}>
          <Row>
            <MainCard page='/' results = {results} isLoading={isLoading} />
          </Row>
        </Col>
        <ReactPaginate 
          className='pagination justify-content-center my-4'
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          nextLabel='Next'
          previousLabel='Prev'
          nextClassName='btn btn-primary'
          previousClassName='btn btn-primary'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          marginPagesDisplayed={width < 576 ? 1 : 3}
          pageRangeDisplayed={width < 576 ? 1 : 3}
          activeClassName='active'
          onPageChange={(data) => {
            setPageNumber(data.selected + 1);
            window.scrollTo({top:0, behavior:'smooth'});
          }}
          pageCount={info?.pages}
        />
      </Row>
    </>
  )
}

export default Characters