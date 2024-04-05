import { MdLocationOn } from 'react-icons/md'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const Card = ({ job }) => {
    const { position, date, id, company, location, status, type } = job

    const getStatus = () => {
        switch (status) {
            case 'Devam Ediyor':
                return 'green';
            case 'Reddedildi':
                return 'red';
            case 'Mülakat':
                return 'orange';
            default:
                return 'green'
        }
    }

    return (
        <div className='card'>
            {/*KART ÜST KISIM */}
            <div className='head'>
                <div className='letter'>
                    <p>{company[0]}</p>
                </div>
                <div className='info'>
                    <p>{position}</p>
                    <p>{company}</p>
                </div>
            </div>
            {/*KART ALT KISIM */}
            <div className='body'>
                <div className='field'>
                    <i>
                        <MdLocationOn></MdLocationOn></i>
                    <p>{location}</p>
                </div>
                <div className='field'>
                    <i>
                        <AiFillClockCircle></AiFillClockCircle></i>
                    <p>{type}</p>
                </div>
                <div className='field'>
                    <i><BsFillCalendarDateFill></BsFillCalendarDateFill></i>
                    <p>{date}</p>
                </div>
                <div className='status'>
                    <span style={{backgroundColor:getStatus()}}>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default Card