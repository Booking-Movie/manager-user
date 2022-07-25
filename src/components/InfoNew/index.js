/* eslint-disable jsx-a11y/img-redundant-alt */
const InfoNew = props => {
  console.log('🚀 ~ file: index.js ~ line 2 ~ InfoNew ~ props', props)
  const { new_body, new_conclusion, new_image, new_introduction } = props.newInfo
  return (
    <>
      <div className="flex flex-col gap-5">
        <p>{new_introduction}</p>
        <p className="whitespace-pre-line">{new_body}</p>
        <div className="flex justify-center">
          <img src={new_image} className="w-[60%] sm:w-full h-[450px] sm:h-[400px] " alt="New Image" />
        </div>
        <p className="whitespace-pre-wrap">{new_conclusion}</p>
      </div>
    </>
  )
}

export default InfoNew
