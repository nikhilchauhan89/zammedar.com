// import React, { useState } from "react";
// import { Range } from "react-range";

// const CustomRange = () => {
//   const [values, setValues] = useState([50]);

//   return (
//     <div style={{ margin: "50px" }}>
//       <Range
//         step={1}
//         min={0}
//         max={100}
//         values={values}
//         onChange={(values) => setValues(values)}
//         renderTrack={({ props, children }) => (
//           <div
//             {...props}
//             style={{
//               height: "6px",
//               background: "#ddd",
//               width: "100%",
//             }}
//           >
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             {...props}
//             style={{
//               height: "20px",
//               width: "20px",
//               backgroundColor: "blue",
//               borderRadius: "50%",
//             }}
//           />
//         )}
//       />
//       <p>Value: {values[0]}</p>
//     </div>
//   );
// };

// export default CustomRange;

// import React, { useState } from "react";

// const RangeSlider = () => {
//   const [value, setValue] = useState(50);

//   return (
//     <div style={{ padding: "20px" }}>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <p>Value: {value}</p>
//     </div>
//   );
// };

// export default RangeSlider;

import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const MultiRangeSlider = () => {
  const [value, setValue] = useState([0, 80]); // min aur max values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: 300, margin: "40px auto" }}>
      <h3>Price Range</h3>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto" // tooltip dikhane ke liye
        min={0}
        max={100}
      />
      <p>
        Selected Range: {value[0]} - {value[1]}
      </p>
    </div>
  );
};

export default MultiRangeSlider;


