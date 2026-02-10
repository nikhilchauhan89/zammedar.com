import React, { useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import Slider from "@mui/material/Slider";

const Calculator = () => {

  const [val, setVal] = useState([0]);
  const max = 30; 
  const [year, setYear] = useState(1);
  const [lakh, setLakh] = useState(100000);

  const annualInterest = 8; 

  const handlevalue = (e, newValue) => setLakh(newValue);
  const handVal = (e, newValue) => setVal(newValue);
  const handYear = (e, newValue) => setYear(newValue);


  const principal = lakh;
  const months = year * 12;
  const monthlyInterestRate = annualInterest / 12 / 100;

  const emi = Math.round(
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
    (Math.pow(1 + monthlyInterestRate, months) - 1)
  );

  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;

 
  const percent = Math.round((val[0] / max) * 100);
  const data = [
    { label: 'Remaining', value: 100 - percent, color: '#b54d4dff' },
    { label: 'Completed', value: percent, color: percent < 100 ? '#106a41ff' : '#938785ff' },
  ];
  const chartsettings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <>
      <div className='emi'>
            <img/>
        <h1>EMI Calculator</h1>
      </div>
      <div className='emi0'>
        <div className='emi1'>
          <div className='emi2'>
            <div className='calculator'>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                Loan Amount
                <span className='lakh'>₹{lakh}</span>
              </p>
              <Slider
                style={{ width: "700px", height: "7px", color: "#0ca963ff" }}
                onChange={handlevalue}
                min={100000}
                max={10000000}
                value={lakh}
              />
              <p style={{ textAlign: "end" }}>
                <span className='percent'>{percent}%</span>
              </p>
              <Slider
                style={{ width: "700px", height: "7px", color: "#0ca963ff" }}
                value={val}
                onChange={handVal}
                min={0}
                max={max}
              />
              <br />
              <p style={{ textAlign: "end" }}>
                <span className='year'> {year} Yr</span>
              </p>
              <Slider
                style={{ width: "700px", height: "7px", color: "#0ca963ff" }}
                onChange={handYear}
                value={year}
                min={1}
                max={30}
                valueLabelDisplay="auto"
              />
            </div>

            <div className='piechart'>
              <PieChart
                series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
                {...chartsettings}
              />
            </div>
          </div>

          <div className='emi3'>
            <div className='rangechart'>
              <p>
                <span>Monthly EMI</span> ₹{emi}
              </p>
              <p>
                <span>Principal amount</span> ₹{principal}
              </p>
              <p>
                <span>Total interest</span> ₹{totalInterest}
              </p>
              <p>
                <span>Total amount</span> ₹{totalAmount}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Calculator;











// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import image from "../image/Jameendar.png";
// import { colors, MenuItem, Select } from '@mui/material'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import img from "../image/banner1.jpg";
// import { PieChart } from '@mui/x-charts/PieChart';
// // import Slider from 'react-slick';
// import Slider from "@mui/material/Slider";

// const Calculator = () => {

//   // const [pie,setPie]=useState()
//   const [val, setVal] = useState([0]);
//   const max = 99;
//   const [year, setYear] = useState([1]);
//   const max1 = 30;

//   const [lakh, setLakh] = useState([100000])
//   const max2 = 10000000;


//   const handlevalue = (e, newValue) => {
//     setLakh(newValue);
//   }

//   const handVal = (e) => {
//     setVal(e.target.value)
//   }

//   const handYear = (e, newValue) => {
//     setYear(newValue)

//   }



//   const percent = Math.round((val[0] / max) * 100);


//   const data = [
//     { label: 'Remaining', value: 100 - percent, color: '#999595' },
//     { label: 'Completed', value: percent, color: percent < 50 ? '#1ba064' : '#aca8a7ff' },
//     // 50% se kam hoga to green, warna red
//   ];
//   const chartsettings = {
//     margin: { right: 5 },
//     width: 200,
//     height: 200,
//     hideLegend: true,
//   };

//   return (
//     <>
//       <div className='emi'>
//         <img/>
//         <h1>EMI Calculator</h1>
//       </div>
//       <div className='emi0'>
//         <div className='emi1'>
//           <div className='emi2'>
//             <div className='calculator'>
//               <p style={{ display: "flex", justifyContent: "space-between" }}>
//                 Loan Amount
//                 <span className='lakh'>

//                   {lakh}
//                 </span>
//               </p>
//               <Slider
//                 style={{ width: "700px", height: "7px", color: "#0ca963ff" }}
//                 onChange={handlevalue}
//                 min={100000}
//                 max={10000000}

//               />
//               <p style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span>1L</span>
//                 <span>1C</span>
//               </p><br />
//               <p style={{ textAlign: "end" }}>
//                 <span className='percent'>{percent}%</span>
//               </p>
//               <Slider
//                 style={{ width: "700px", height: "7px", color: "#0ca963ff" }}
//                 value={val}
//                 onChange={handVal}
//                 // valueLabelDisplay="{percentStart}%"
//                 min={0}
//                 max={30}
//               />
//               <div style={{ width: "99%", display: "flex", justifyContent: "space-between", marginLeft: "4px" }}>
//                 <div>

//                   <p style={{ color: "gray" }}>{"1%"}</p>
//                 </div>
//                 <div>
//                   <p style={{ color: "gray" }}>{"30%"}</p>
//                 </div>
//               </div>
//               <br />
//               <p style={{ textAlign: "end" }}>
//                 <span className='year'> {year}Yr</span>
//               </p>
//               <Slider
//                 style={{ width: "700px", height: "7px" , color: "#0ca963ff"}}
//                 onChange={handYear}
//                 valueLabelDisplay="auto"
//                 min={1}
//                 max={30}
//               />


//             </div>
//             <div className='piechart'>
//               <PieChart
//                 // onChange={piechart}
//                 series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
//                 {...chartsettings}
//               />


//             </div>

//           </div>
//           <div className='emi3'>
//             <div className='rangechart'>
//               <p>
//                 <span>Monthly EMI</span>
//                 ₹8379
//               </p>
//               <p>
//                 <span>Principal amount</span>
//                 ₹100,000
//               </p>

//               <p>
//                 <span>Total interest</span>
//                 ₹542.494
//               </p>
//               <p>
//                 <span>Total amount</span>
//                 ₹100,542.494
//               </p>

//             </div>
//             <div className=''>

//             </div>

//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Calculator























