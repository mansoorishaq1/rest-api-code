import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Table.module.css'

const Table = () => {
    const [Data, setdata] = useState([]);
    useEffect(() => {
        console.log("axios call");

        axios.get('https://randomuser.me/api/?results=10')
            .then(response => {
                // console.log("Response data:",response);
                let dataResults = response.data.results;
                setdata(dataResults);
                console.log("dataResults", dataResults);

            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, [])
    
    return (
        <div>
            <h1>Fetched Data</h1>
            {//JSON.stringify(Data)
            }
            

            <table className={classes.user}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>

                    </tr>
                </thead>
                <tbody>
                {Data.map((user, index) => {
                    return (
                        
                            <tr key={index}>
            
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.gender}</td>
                            </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;