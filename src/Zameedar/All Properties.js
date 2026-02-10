import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img from "../image/banner1.jpg";
import { Button, Card } from '@mui/material';
import Select from 'react-select';
import Slider from "@mui/material/Slider";
import data1 from './SecCardData';
import what from '../image/whatsapp.png'
import { useLocation } from 'react-router-dom';


const choose = [
  { value: "Panchkula", label: "Panchkula" },
  { value: "chandigarh", label: "chandigarh" },
  { value: "Mohali", label: "Mohali" },
  { value: "Derabassi", label: "Derabassi" },
  { value: "zirakpur", label: "zirakpur" },
  { value: "Lalru,Punjab", label: "Lalru,Punjab" }
];

const Properties = () => {

  const location = useLocation();
  const { select, selected, selectedOption } = location.state || {};

  const [valu, setValu] = useState([0, 10000000]);
  const [val, setVal] = useState(select || null);



  const [card, setCard] = useState(1)
  const cardsPerPage = 9;

  const lastIndexCard = card * cardsPerPage;
  const firstIndexCard = lastIndexCard - cardsPerPage;

  const currentCard = data1.slice(firstIndexCard, lastIndexCard);

  const [filters, setFilters] = useState({
    sale: select?.value?.toLowerCase() === "for sale",
    rent: select?.value?.toLowerCase() === "for rent",
    lease: select?.value?.toLowerCase() === "for lease",
    residential: selected?.value?.toLowerCase() === "residential",
    commercial: selected?.value?.toLowerCase() === "commercial",
    industrial: selected?.value?.toLowerCase() === "industrial",
    fivehundred: false,
    onethousand: false,
    twothousand: false,
    threethousand: false,
    fourthousand: false,
    fivethousand: false,
  });


  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });

  };

  const filteredCards = currentCard.filter((item) => {
    if (!filters.sale && !filters.lease && !filters.rent && !filters.residential
      && !filters.commercial && !filters.industrial
      && !filters.fivehundred && !filters.onethousand && !filters.twothousand &&
      !filters.threethousand && !val && !select && !selected && !selectedOption) {
      return true;
    }
    const price = parseInt(item.price);
    const size = parseInt(item.size);


    if (filters.fivehundred && size <= 500) return true;
    if (filters.onethousand && size > 500 && size <= 1000) return true;
    if (filters.twothousand && size > 1000 && size <= 2000) return true;
    if (filters.threethousand && size > 2000 && size <= 3000) return true;
    if (filters.fourthousand && size > 3000 && size <= 4000) return true;
    if (filters.fivethousand && size > 4000 && size <= 5000) return true;
    if (filters.sale && item.type.toLowerCase() === "for sale") return true;
    if (filters.lease && item.type.toLowerCase() === "for lease") return true;
    if (filters.rent && item.type.toLowerCase() === "for rent") return true;
    if (filters.commercial && item.title.toLowerCase().includes("commercial")) return true;
    if (filters.industrial && item.title.toLowerCase().includes("industrial")) return true;
    if (filters.residential && item.title.toLowerCase().includes("residential")) return true;
    if (val && item.location.toLowerCase().includes(val.value.toLowerCase())) return true;
    if (select && item.type.toLowerCase().includes(select.value.toLowerCase())) return true;
    if (selected && item.title.toLowerCase().includes(selected.value.toLowerCase())) return true;
    if (selectedOption && item.location.toLowerCase().includes(selectedOption.value.toLowerCase())) return true;


    // if ( price >= valu[0] && price <= valu[1]) return true;
    return false;
  });

  const totalCard = Math.ceil(data1.length / cardsPerPage);

  const prev = () => {
    if (card > 1) {
      setCard(card - 1)
    }
  }
  const next = () => {
    if (card < totalCard) {
      setCard(card + 1)
    }
  }
  const handleVal = (val) => {
    setVal(val);
  }

  const handleChange = (event, newValue) => {
    setValu(newValue);
  };

  const handleCh = (card) => {
    setCard(card)
  }

  const allclear = (e) => {
    e.preventDefault()
    setFilters({
      sale: false,
      lease: false,
      rent: false,
      residential: false,
      commercial: false,
      industrial: false,
      fivehundred: false,
      onethousand: false,
      twothousand: false,
      threethousand: false,
      fourthousand: false,
      fivethousand: false,
    });
    setVal(null)
    setValu([0, 10000000]);
  }


  return (
    <>
      <div className='emi'>
        <img />
        <h1>All Properties </h1>
      </div>
      <div className='property'>
        <div className='sidebar'>
          <div className='filter'>
            Filters
          </div>
          <div className='filterbtn'>
            <button onClick={allclear}>Clear Filters</button>
            <h3>Locality</h3>
            <Select
              placeholder="Select Locality"
              className='filterselect'
              options={choose}
              value={val}
              onChange={handleVal}
              styles={{
                placeholder: (defaultStyles) => ({
                  ...defaultStyles,
                  fontSize: "14px"
                })
              }}
            >
            </Select>
          </div>
          <div className='check'>
            <br />
            <h3>Property Transitions</h3><br />
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.sale}
                name='sale'
              />
              <label>Sale</label>
            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.lease}
                name='lease'
              />
              <label>Lease</label>
            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.rent}
                name='rent'
              />
              <label>Rent</label>
            </div>
          </div>
          <div className='check'>
            <br />
            <h3>Property Type</h3><br />
            <div className='filt_check'>
              <input id='Residential' type='checkbox'
                onChange={handleCheckbox}
                checked={filters.residential}
                name='residential'

              />
              <label htmlFor='Residential'>Residential</label>
            </div>
            <div className='filt_check'>
              <input type='checkbox'
                id='Commercial'
                onChange={handleCheckbox}
                checked={filters.commercial}
                name='commercial'

              />
              <label htmlFor='Commercial'>Commercial</label>
            </div>
            <div className='filt_check'>
              <input type='checkbox'
                id='Industrial'
                onChange={handleCheckbox}
                checked={filters.industrial}
                name='industrial'
              />
              <label htmlFor='Industrial'>Industrial</label>
            </div>

          </div>
          <div className='check' >
            <br />
            <p>
              Selected Range: {valu[0]} - {valu[1]}
            </p><br />
            <Slider
              style={{ width: 200, marginLeft: ".5rem" }}
              value={valu}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000000}
            />
            <div className='minmax'>
              <div className='min'>
                <p>minimum</p>
              </div>
              <div className='min'>
                <p>maximum</p>
              </div>
            </div>


          </div>
          <div className='checkL'>
            <br />
            <h3>Size</h3><br />
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.fivehundred}
                name='fivehundred'

              />
              <label>0-500yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.onethousand}
                name='onethousand'
              />
              <label>500-1000yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.twothousand}
                name='twothousand'
              />
              <label>1000-2000yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.threethousand}
                name='threethousand'
              />
              <label>2000-3000yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.fourthousand}
                name='fourthousand'
              />
              <label>3000-4000yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox'
                onChange={handleCheckbox}
                checked={filters.fivethousand}
                name='fivethousand'
              />
              <label>4000-5000yds</label>

            </div>
            <div className='filt_check'>
              <input type='checkbox' />
              <label>5000+yds</label>

            </div>

          </div>

        </div>
        <div className='allcard'>
          {filteredCards.map((item, index) => (
            <div className='slide' key={index}>
              <div className='card2'>
                <img src={item.image} alt={item.title} />
                <p className='p'>{item.type}</p>
                <div className='card3'>
                  <p className='new'>{item.status}</p>
                  <p className='com'>{item.title}</p>
                  <p style={{ fontSize: "13px" }}>₹{item.price} | {item.size}</p>
                  <p className='sect'>
                    <LocationOnIcon style={{ height: "15px", marginBottom: "-2px" }} />
                    {item.location}
                  </p>
                  <div style={{ width: "106%", height: "12vh", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <a href={item.link}><Button>View Details</Button></a>
{/* 
                    <img style={{ width: "40px", height: "30px", marginLeft: "20px", marginTop: "2rem", position: "absolute" }}  /> */}
                    <button style={{ backgroundColor: "black" }} className='whatsapp'>

                      <a style={{ fontWeight: "bold" }}>Whatsaap</a>
                      <br />
                      <a style={{ color: "#47c756" }}>Click to chat</a>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className='goBtn'>
            <button className='Gopre' onClick={prev}>Prev</button>
            {Array.from({ length: totalCard }, (_, index) => (
              <button
                key={index}
                className={`Gopre ${card === index + 1 ? "activeBt" : ""}`}
                onClick={() => handleCh(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className='Gopre' onClick={next}>Next</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Properties


