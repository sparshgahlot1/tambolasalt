import { useState } from "react";
import Layout from "../../../components/Layout";

export default function NewContest (){

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [ticket, setTicket] = useState('');

    console.log(date);

    return(
        <Layout>
            <div className="flex flex-col">
            <h1>New Contest</h1>
            <label>Contest Name</label>
            <input type="text" placeholder="Contest Name" value={title} onChange={ev=>setTitle(ev.target.value)}/>
            <label>Set Date and Time</label>
            <input type="date" placeholder="Start Date" value={date} onChange={ev=>setDate(ev.target.value)}/>
            <label>Number of Tickets</label>
            <input type="number" placeholder="Tickets/Player" value={ticket} onChange={ev=>setTicket(ev.target.value)}/>
            <button className="btn-primary bg-green-500 hover:bg-green-600 text-white py-2 px-4 border-green-600 rounded-md w-20">
                Save
                </button>
            
            </div>
        </Layout>
    )
}