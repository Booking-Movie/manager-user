import './index.css'

const FaqComponent = ({ faq, index, toggleFAQ }) => {
  return (
    <div className={'faq' + (faq.open ? ' open' : '')} key={index} onClick={() => toggleFAQ(index)}>
      <div className="faq-question text-lg font-semibold">{faq.name}</div>
      <div className="faq-answer">
        <p className="text-lg font-medium">
          {faq.acceptedAnswer.text.replace(/<\s*\/?\s*br\s*.*?>/g, '\n', '<p></p>')}
        </p>
      </div>
    </div>
  )
}
export default FaqComponent
