import { useEffect } from 'react'
import { useState } from 'react'
import InputComponent from '../InputComponent'
import Label from '../Label'

const FilterDate = props => {
  const { handleFilterDate } = props
  const [date, setDate] = useState('')
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
