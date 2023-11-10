import React, { useState } from "react";
import axios from 'axios';
import Layout from "../../../components/Layout";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function NewContest() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(dayjs());
    const [ticket, setTicket] = useState('');
    const [prizePool, setPrizePool] = useState('');
    const [entry, setEntry] = useState('');


    async function createContest(event) {
      event.preventDefault();
      const data = {title, date, ticket,prizePool,entry}
      
      await axios.post('/api/contest', data)
      
      console.log("Form submitted with the following data:");
      console.log("Title:", title);
      console.log("Date:", date);
      console.log("Ticket:", ticket);
      console.log("prizePool:", prizePool);
  }

    return (
        <Layout>
            
                <h1>New Contest</h1>
                <form onSubmit={createContest}>
                <div className="flex flex-col">
                <label>Contest Name</label>
                <input
                    type="text"
                    placeholder="Contest Name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Set Date and Time</label>
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
                <input
                    type="number"
                    placeholder="Tickets/Player"
                    value={ticket}
                    onChange={ev => setTicket(ev.target.value)}
                />
                <label>Prize Pool</label>
                <input
                    type="number"
                    placeholder="PrizePool"
                    value={prizePool}
                    onChange={ev => setPrizePool(ev.target.value)}
                />
                <label>Entry</label>
                <input
                    type="number"
                    placeholder="Entry"
                    value={entry}
                    onChange={ev => setEntry(ev.target.value)}
                />
                <button
                    type="submit"
                    className="btn-primary bg-green-500 hover:bg-green-600 text-white py-2 px-4 border-green-600 rounded-md w-20"
                >
                    Save
                </button>
                </div>
                </form>
            
        </Layout>
    );
}
