/* eslint-disable jsx-a11y/img-redundant-alt */
const InfoNew = props => {
  const { new_body, new_conclusion, new_image, new_introduction, id } = props.newInfo
  return (
    <>
      <div key={id} className="new-model">
        <p>{new_introduction}</p>
        <div className="new-model_content">
          <img
            src={new_image}
            className=" new-model_content__image
            "
            alt="New Image"
          />
        </div>
        <p className="whitespace-pre-line">{new_body}</p>
        <p className="whitespace-pre-wrap">{new_conclusion}</p>
      </div>
    </>
  )
}

export default InfoNew
