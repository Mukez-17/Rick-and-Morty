import React from 'react'

const FilterBTN = ({ items, name, index, setPageNumber, task }) => {
  return (
    <>
        <div className="form-check">
            <input 
              onClick={() => {
                setPageNumber(1);
                task(items);
              }}
              type="radio" 
              className="form-check-input" 
              name={name} 
              id={`${name}-${index}`}
            />
            <label htmlFor={`${name}-${index}`} className="btn btn-outline-primary">{items}</label>
        </div>
    </>
  )
}

export default FilterBTN