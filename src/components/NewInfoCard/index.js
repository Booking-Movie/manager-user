import { useState } from 'react'
import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import InfoNew from '../InfoNew'
import Modal from '../Modal'

const NewInfoCard = props => {
  const { new_body, new_conclusion, new_image, new_introduction, new_title, type_name, new_id } = props.newItem
  const [showEditNewModal, setShowEditNewModal] = useState(false)
  const handleShowEditNewModal = useCallback(() => {
    setShowEditNewModal(!showEditNewModal)
  }, [showEditNewModal])
  const handleCloseEditNewModal = useCallback(() => {
    setShowEditNewModal(false)
  }, [])
  return <></>
}

export default NewInfoCard
