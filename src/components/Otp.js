import React, { useEffect, useRef, useState } from 'react'

const Otp = () => {
    const [inputs, setInputs] = useState(new Array(4).fill(""));
    const [inputArray, setInputArray] = useState(inputs)
    const [msg, setMsg] = useState(false)
    const refs = [useRef(), useRef(), useRef(), useRef()];

    const handle = (evt, index) => {
        const val = evt.target.value;
        if (!Number(val))
            return;
        const copyArray = [...inputArray];
        copyArray[index] = val
        setInputArray(copyArray)

        if (index < inputArray.length - 1) {

            refs[index + 1].current.focus()
        }
    }

    const handleKey = (evt, index) => {
        // console.log(evt.keyCode)
        if (evt.keyCode == 8) {
            const copyArray = [...inputArray]
            copyArray[index] = ""
            setInputArray(copyArray)
            if (index > 0)
                refs[index - 1].current.focus()
        }
        if (evt.keyCode == 37) {
            if (index > 0) {
                refs[index - 1].current.focus()
            }
        }
        if (evt.keyCode == 39) {
            if (index < inputArray.length - 1) {
                refs[index + 1].current.focus()
            }
        }
    }

    const handlePaste = (evt) => {
        const data = evt.clipboardData.getData("text")

        const dataArray = data.split("");
        setInputArray(dataArray)
        refs[inputArray.length - 1].current.focus()
    }

    const handleMsg = () => {
        inputArray.map((curValue, index) => {
            if (curValue == "") {
                setMsg(false)
            } else {
                setMsg(true)
            }
        })
    }


    useEffect(() => {
        refs[0].current.focus()
    }, [])


    return (
        <div className='container'>
            <h1>OTP fields</h1>
            <h3>{msg ? "verified" : "please fill the details"}</h3>
            {inputs.map((curValue, index) => {
                return <input maxLength="1" ref={refs[index]} value={inputArray[index]}
                    key={index} type='text'
                    onPaste={handlePaste}
                    onKeyDown={(evt) => handleKey(evt, index)}
                    onChange={(evt) => handle(evt, index)} />
            })}
            {/* <input type='text'></input> */}
            <br />
            <button onClick={handleMsg}>Verify OTP</button>

        </div>
    )
}

export default Otp