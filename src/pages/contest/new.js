import { useState } from "react";
import Layout from "../../../components/Layout";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function NewContest (){

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(dayjs());
    const [ticket, setTicket] = useState('');

    console.log(date);

    return(
        <Layout>
            <div className="flex flex-col">
            <h1>New Contest</h1>
            <label>Contest Name</label>
            <input type="text" placeholder="Contest Name" value={title} onChange={ev=>setTitle(ev.target.value)}/>
            <label>Set Date and Time</label>
            {/* <input type="date" placeholder="Start Date" value={date} onChange={ev=>setDate(ev.target.value)}/> */}
            <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker className="w-40"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
            <label>Number of Tickets</label>
            <input type="number" placeholder="Tickets/Player" value={ticket} onChange={ev=>setTicket(ev.target.value)}/>
            <button type="submit" className="btn-primary bg-green-500 hover:bg-green-600 text-white py-2 px-4 border-green-600 rounded-md w-20">
                Save
                </button>
            
            </div>
        </Layout>
    )
}