import React from 'react'
import { CgDollar } from "react-icons/cg";
import { CgMathPercent } from "react-icons/cg";
import { CgUserList } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { TbBrandCodepen } from "react-icons/tb";
import { CgCalendar } from "react-icons/cg";
import Button from './Button';
import "bootstrap/dist/css/bootstrap.min.css"

 import { ResponsiveContainer, PieChart, Pie, Legend, BarChart,Bar,XAxis ,YAxis,CartesianGrid,Tooltip} from 'recharts';
 
 
 

function Home() {
  const generateBarChartData = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const data = [];

    for (let i = 1; i <= daysInMonth; i++) {
        data.push({ name: i, pv: Math.floor(Math.random() * 1000) }); // Random data for each day
    }

    return data;
  };

 const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  ]
  const barChartData = generateBarChartData();
  
    return(
      <main className='main-container'>
        <div className='main-title'> 
          <h1 className='title-over'>Overview</h1>
          <div className='buttons-style'>
          <div className='Buttons'>
          {/* Button 1 */}
          <Button text="PRODUIT" />
          {/* Button 2 */}
          <Button text="Team member" />
          {/* Button 3 */}
          <Button text="03-06-2024" />
        </div>
        </div>
      
          
        </div >
        <div className='main-cards'>
          
          {/* card 1*/}
          <div className='row-div'>
          <div className='card-inner card1' >
            <div>
            <h4>Revenu net</h4>
            <h6>$241.00</h6>
            </div>
            <CgDollar className='card_icon'/>
          </div>
          <div className='card-inner card1'>
            <div>
            <h4>Total Command</h4>
            <h6>$241.00</h6>
            </div>
            <CgDollar className='card_icon'/>
        </div>
        <div className='card-inner card1' >
          <div>
            <h4>Taux De Conversion </h4>
            <h6>$241.00</h6>
            </div>
            <CgMathPercent className='card_icon'/>
          </div>
        </div>
       
        {/* card 2 */ }
        <div className='row-div'>
        <div className='card-inner card2' >
          <div>
            <h4>Chiffre D'affaire</h4>
            <h4>1</h4>
            </div>
            <TbBrandCodepen className='card_icon'/>
          </div>
          <div className='card-inner card2'>
            <div>
            <h4>Commande expider</h4>
            <h4>1</h4>
            </div>
            <TbBrandCodepen className='card_icon'/>
        </div>  
        <div className='card-inner card2' >
          <div>
            <h4>Taux D'expider</h4>
            <h4>1</h4>
            </div>
            <CgMathPercent className='card_icon'/>
          </div>
        </div>
        
        
        {/* card 3 */}
        <div className='row-div'>
        <div className='card-inner card3' >
          <div>
            <h4>Depense</h4>
            <h4>2</h4>
            </div>
            <CgUserList className='card_icon'/>
          </div>
          <div className='card-inner card3'>
            <div>
            <h4>Commande livre</h4>
            <h4>2</h4>
            </div>
            <CgPlayListCheck className='card_icon'/>
        </div>
        
        <div className='card-inner card3' >
          <div>
            <h4>Taux De livre</h4>
            <h4>2</h4>
            </div>
            <CgUserList className='card_icon'/>
          </div>
        
        </div>
       
      
          </div>
          
          
        
          
        <div className='charts'>
       
        <div className='style-chart'>
        <div className='chart-title'>
          <h4>Statistique command<span className='date'>03-06-2024</span>  <CgCalendar className='clendar-icon'/>  </h4>  
          
        </div>
        <ResponsiveContainer width="100%" height="80%">
        
        <BarChart
          width={500}
          height={300}
          data={barChartData}
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
        <div className='chart-title'>
          <h4 className='chart-pie'>Statistiques Colis</h4>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart className='piechart'>
            <Pie dataKey="value" data={data} fill="#0075ff" label />
          </PieChart>
        </ResponsiveContainer>
        </div>
      
        
        </div>
       <div className='table'>
        <div className='table-title'><h3>Recent Sales</h3></div>
        <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>Warehouse</th>
                        <th>Status</th>
                        <th>Grand Total</th>
                        <th>Paid</th>
                        <th>Due</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>REF001</td>
                        <td>Customer A</td>
                        <td>Warehouse X</td>
                        <td>Shipped</td>
                        <td>$500</td>
                        <td>$400</td>
                    </tr>
                    <tr>
                        <td>REF002</td>
                        <td>Customer B</td>
                        <td>Warehouse Y</td>
                        <td>Pending</td>
                        <td>$700</td>
                        <td>$0</td>
                    </tr>
                  
                </tbody>
            </table>
        </div>
       
      </main>
    )
     

  
    
  
}

export default Home