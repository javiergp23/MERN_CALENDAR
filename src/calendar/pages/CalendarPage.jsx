import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NavBar } from '../'

// import enUs from 'date-fns/locale/en-US'
import {addHours} from 'date-fns';
import { localizer, getMessagesES } from '../../helpers';

const events = [{
  title: 'Cuempleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Javier',
  }
}]


 export const CalendarPage = () => {
  return (
    <>
      <NavBar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages = {getMessagesES()}
    />
    </>
  )
}

