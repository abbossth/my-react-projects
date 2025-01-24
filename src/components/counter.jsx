import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)


    const onPlusClick = () => {
        setCount(count + 1)
    }

    const onMinusClick = () => {
        setCount(count - 1)
    }

  return (
    <>
        <div className="counter-countainer">
            <div className="counter">
                <button onClick={onMinusClick} className="btn-minus">-</button>
                <span className="son"> {count} </span>
                <button onClick={onPlusClick} className="btn-plus">+</button>
            </div>
        </div>
    </>
  )
}

export default Counter