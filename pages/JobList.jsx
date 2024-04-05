import axios from 'axios'
import React from 'react'
import Card from '../components/Card'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setJob,setError} from '../redux/jobSlice'
import Loading from '../components/Loading'
import RefreshButton from '../components/RefreshButton'
import Filter from '../components/Filter'
import { useNavigate } from 'react-router-dom'

const JobList = () => {
  const dispatch = useDispatch()
  const fetchData=()=>{
    axios.get('http://localhost:4000/jobs')
    .then((res)=>{dispatch(setJob(res.data))})
    .catch((err)=>{dispatch(setError())}) 
  }
  const navigate = useNavigate()
  const handleSubmit = (e) => {e.preventDefault();}

  const state = useSelector((store)=>store)


  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <div className='list-page'>

      <Filter handleSubmit={()=>handleSubmit()}></Filter>


      <h3 className='job-count'>
        Bulunan ({state.jobs.length}) iş arasından ({state.jobs.length}) tane görüntüleniyor
      </h3>

      <section className='job-list'>
        {!state.initialized ? <Loading/> : state.jobs.map((job)=><Card key={job.id} job={job}></Card>)}
        
        {state.isError && <div className='error-msg'><p>Üzgünüz bir problem oluştu.</p> <RefreshButton handleClick={()=>fetchData()}></RefreshButton></div>}
      </section>
    </div>
  )
}

export default JobList