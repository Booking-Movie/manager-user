import { useState } from "react"

const FQAPage = () => {
  const [state, setState] = useState()
  const handleClick = value => {
    setState(value)
  }
  return (
    <>
      <div className="w-[90%] max-w-[1440px] relative mx-auto h-auto z-10">
        <div className="w-full h-auto relative mx-auto max-w-[1110px]">
          <button className="h-auto relative w-[100%]" onChange={handleClick}>
            <li className="block h-auto w-full mb-1" >
              <div className="table w-full bg-[rgba(0,0,0,0.5)] min-h-[76px] cursor-pointer relative">Button</div>
            </li>
          </button>
        </div>
        <div className={` w-full overflow-hidden mt-1 ${state ? '' : 'hidden h-auto'} `}>
          <div className="bg-[rgba(255, 255, 255, 0.9)] h-auto w-full relative overflow-hidden">
            <h1>Trả lời</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-[1440px] relative mx-auto h-auto z-10">
        <button onClick={() => setState(!state)}>
          <div className="w-full h-auto relative mx-auto max-w-[1110px]">
            <ul className="h-auto relative w-[100%]">
              <li className="block h-auto w-full mb-1">
                <div className="table w-full bg-[rgba(0,0,0,0.5)] min-h-[76px] cursor-pointer relative">Button</div>
              </li>
            </ul>
          </div>
        </button>
        <div className={` w-full overflow-hidden mt-1 ${state ? '' : 'hidden h-auto'} `}>
          <div className="bg-[rgba(255, 255, 255, 0.9)] h-auto w-full relative overflow-hidden">
            <h1>Trả lời</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-[1440px] relative mx-auto h-auto z-10">
        <button onClick={() => setState(!state)}>
          <div className="w-full h-auto relative mx-auto max-w-[1110px]">
            <ul className="h-auto relative w-[100%]">
              <li className="block h-auto w-full mb-1">
                <div className="table w-full bg-[rgba(0,0,0,0.5)] min-h-[76px] cursor-pointer relative">Button</div>
              </li>
            </ul>
          </div>
        </button>
        <div className={` w-full overflow-hidden mt-1 ${state ? '   ' : 'hidden h-auto '} `}>
          <div className="bg-[rgba(255, 255, 255, 0.9)] h-auto w-full relative overflow-hidden">
            <h1>Trả lời</h1>
          </div>
        </div>
      </div>
    </>

  )
}

export default FQAPage
