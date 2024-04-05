import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { statusOptions, typeOptions, sortOptions } from '../constants/constants'
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

  

  const navigate = useNavigate()
  const handleSubmit = (e) => {e.preventDefault();
    const form = new FormData(e.target);
    const newJob = Object.fromEntries(form.entries())

    if(!newJob.type || !newJob.status)
    {
      toast.info('Lütfen tip ve durum seçiniz.')
      return
    }

    newJob.id=v4()

    newJob.date = new Date();

    axios.post('http://localhost:4000/jobs',newJob)
    .then(()=>{
      toast.success('Ekleme işlemi başarılı!');
      navigate('/')
    })
    .catch(()=>toast.error("Ekleme işlemi başarısız."))
  }

  return (
    <div className='add-page'>
      <section className='add-section'>
      <h2>Yeni İş Ekle</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Pozisyon</label>
          <input type="text" required name='position' />
        </div>
        <div>
          <label htmlFor="">Şirket</label>
          <input type="text" required name='company' />
        </div>
        <div>
          <label htmlFor="">Lokasyon</label>
          <input type="text" required name='location' />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name="status">
            <option selected disabled>Seçiniz</option>
            {statusOptions.map((item) => (<option key={item}>{item}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select name="type">
            <option selected disabled>Seçiniz</option>
            {typeOptions.map((item) => (<option key={item}>{item}</option>))}
          </select>
        </div>


        <div>
          <button>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">EKLE</span>
          </button>
        </div>
      </form>
    </section>
    </div>

  )
}

export default AddJob