import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { DateRange } from 'react-date-range'
import { addDays } from 'date-fns'
import * as locales from 'react-date-range/dist/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './calendar.css'




const Calendar = ({monthsCount, directionCalendar}) => {
    
    const [locale, setLocale] = useState('ru')
    // const [locale, setLocale] = useState('enGB')
    // const [locale, setLocale] = useState('enUS')

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 3),
            key: 'selection'
        }
    ])

    return (
        <div className='Calendar'>
            <Stack gap={2}>
                    <DateRange
                        minDate={new Date()}
                        months={monthsCount}
                        direction={directionCalendar}
                        locale={locales[locale]}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        onChange={item => setDate([item.selection])}
                    />
                <p className='date_res'>
                    Выбранные даты бронирования с <b>{date.map(item => item.startDate.toDateString().split(' ')[2])}</b> по <b>{date.map(item => item.endDate.toDateString().split(' ')[2])}</b>.
                </p>
            </Stack>
        </div>
    )
}
export default Calendar