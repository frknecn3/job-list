import React from 'react'
import { useDispatch } from 'react-redux'
import { statusOptions,sortOptions,typeOptions} from '../constants/constants'
import {setJob,setError,filterBySearch,filterByStatus,filterByType,sortJobs,clearFilters} from '../redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
const Filter = () => {
  
    const searchRef = useRef(null)
    const typeRef = useRef(null)
    const statusRef = useRef(null)
    const sortRef = useRef(null)

    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(filterBySearch(e.target.value))
    }

    const handleReset = () =>{
      dispatch(clearFilters())
      searchRef.current.value=''
      typeRef.current.value='Seçiniz'
      statusRef.current.value='Seçiniz'
      sortRef.current.value='Seçiniz'
    }

  return (
    <section className='filter-section'>
    <h2>İşleri Filtrele</h2>
    <form action="">
      <div>
        <label htmlFor="">Arama</label>
        <input onChange={handleChange} ref={searchRef} type="search"/>
      </div>
      {/*SELECTLER*/}
      <div>
        <label htmlFor="">Durum</label>
        <select name="status" ref={statusRef} onChange={(e)=>dispatch(filterByStatus(e.target.value))}>
          <option selected disabled>Seçiniz</option>
          {statusOptions.map((item) => (<option key={item}>{item}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor="">Tür</label>
        <select name="status" ref={typeRef} onChange={(e)=>dispatch(filterByType(e.target.value))}>
          <option selected disabled>Seçiniz</option>
          {typeOptions.map((item) => (<option key={item}>{item}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor="">Sırala</label>
        <select ref={sortRef} onChange={(e)=>dispatch(sortJobs(e.target.value))}> 
          <option selected disabled>Seçiniz</option>
          {sortOptions.map((item) => (<option key={item}>{item}</option>))}
        </select>
      </div>


      <div>
        <button type='button' className='btn' onClick={handleReset}>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">SIFIRLA</span>
        </button>
      </div>
    </form>
  </section>
  )
}

export default Filter