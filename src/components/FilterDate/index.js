import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import InputComponent from '../InputComponent'
import Label from '../Label'

const FilterDate = props => {
  const { handleFilterDate } = props
  const [date, setDate] = useState('')
  console.log('🚀 ~ file: index.js ~ line 10 ~ date', date)
  useEffect(() => {
    if (date !== '') {
      handleFilterDate(date)
    }
  }, [date, handleFilterDate])

  return (
    <>
      <div className="flex flex-col gap-2 w-full items-center">
        <Label label="Select Movie Form Date" />
        <InputComponent type="date" onChange={e => setDate(e.target.value)} />
      </div>
    </>
  )
}

export default FilterDate
