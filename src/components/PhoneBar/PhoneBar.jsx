import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
     const [phone,setPhones] = useState([])
     useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res=>res.json())
        // .then(data=>console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadedData = data.data.data;
            console.log(loadedData);
            const phonesData = loadedData.map(phone=>{
                const parts = phone.slug.split('-')
                const price = parseInt (parts[1]);
                const PhoneInfo={
                    name:phone.phone_name,
                    price:price

                }
                return PhoneInfo
            })
            // console.log(PhoneInfo);
            setPhones(phonesData);
           
        })
     },[])
    return (
        <div>
            <BarChart
            width={1000}height={500}data={phone}>
                 <Bar dataKey="price" fill="#8884d8" />
                 <XAxis dataKey={"name"}></XAxis>
                 <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;