import React from 'react'
import { CgDollar } from "react-icons/cg";
import { CgMathPercent } from "react-icons/cg";
import { CgUserList } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { TbBrandCodepen } from "react-icons/tb";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { ResponsiveContainer, PieChart, Pie, Legend, BarChart,Bar,XAxis ,YAxis,CartesianGrid,Tooltip} from 'recharts';
 import Button from './Button';
 
 

function Home() {
  

 const data = [
    {
  
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  ]

  
    return(
      <main className='main-container'>
         
 

        <div className='main-title'> 
          <h1>Overview</h1>
        </div >
        <div className='main-cards'>
          
          {/* card 1*/}
          <div className='row-div'>
          <div className='card-inner card1' >
            <h3>Revenu net</h3>
            <CgDollar className='card_icon'/>
          </div>
          <div className='card-inner card1'>
            <h3>Total Command</h3>
            <CgDollar className='card_icon'/>
        </div>
        <div className='card-inner card1' >
            <h3>TAUX DE CONVERSION</h3>
            <CgMathPercent className='card_icon'/>
          </div>
        </div>
       
        {/* card 2 */ }
        <div className='row-div'>
        <div className='card-inner card2' >
            <h3>Chiffre D'affaire</h3>
            <TbBrandCodepen className='card_icon'/>
          </div>
          <div className='card-inner card2'>
            <h3>Commande expider</h3>
            <TbBrandCodepen className='card_icon'/>
        </div>  
        <div className='card-inner card2' >
            <h3>TAUX D'expider</h3>
            <CgMathPercent className='card_icon'/>
          </div>
        </div>
        
        
        {/* card 3 */}
        <div className='row-div'>
        <div className='card-inner card3' >
            <h3>Depense</h3>
            <CgUserList className='card_icon'/>
          </div>
          <div className='card-inner card3'>
            <h3>Commande livre</h3>
            <CgPlayListCheck className='card_icon'/>
        </div>
        
        <div className='card-inner card3' >
            <h3>TAUX De livre</h3>
            <CgUserList className='card_icon'/>
          </div>
        
        </div>
        
        

        
        
          </div>
    

       
       
      
        
    
        <div className='charts'>
        <div className='style-chart'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#0075ff" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
        </div>

        
        <div className='style-chart'>
      
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#0075ff" label />
          </PieChart>
        </ResponsiveContainer>
        </div>
      
        
        </div>
       
      </main>
    )
     

  
    
  
}

export default Home