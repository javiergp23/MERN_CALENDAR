import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NavBar, CalendarEvent } from '../'

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

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected })
    
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

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
        eventPropGetter = { eventStyleGetter }
        comsponents = {{
            event: CalendarEvent
        }}
    />
    </>
  )
}

