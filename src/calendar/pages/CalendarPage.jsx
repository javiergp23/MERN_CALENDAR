import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import enUs from 'date-fns/locale/en-US'

import { NavBar } from '../'
import {addHours, format, parse, startOfWeek, getDay} from 'date-fns';

const locales = {
  'en-US': enUs,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

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
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
    />
    </>
  )
}

