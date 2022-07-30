import { useCallback, useState } from 'react'
import InfoNew from '../InfoNew'
import Modal from '../Modal'

const NewInfoList = props => {
  const { new_image, new_introduction, new_title } = props.newItem
  const [showEditNewModal, setShowEditNewModal] = useState(false)
  const handleShowEditNewModal = useCallback(() => {
    setShowEditNewModal(!showEditNewModal)
  }, [showEditNewModal])
  const handleCloseEditNewModal = useCallback(() => {
    setShowEditNewModal(false)
  }, [])

  return (
    <>
      <div className="new">
        <button
          onClick={handleShowEditNewModal}
          className=" bg-transparent absolute w-full h-full left-0 top-0 cursor-pointer rounded-xl"
        />
        {showEditNewModal && (
          <Modal onCancel={handleCloseEditNewModal} headerText={`${new_title}`}>
            <InfoNew newInfo={props.newItem} />
          </Modal>
        )}
        <div className="new-image">
          <img className="new-image_content" src={new_image} alt="ImageNew Info" />
        </div>
        <div className="new-info">
          <h2 className="text-gray-900 ">{new_title}</h2>
          <p className=" text-gray-900">
            {new_introduction.length > 50 ? new_introduction.substr(0, 50) + '...' : new_introduction}
          </p>
        </div>
      </div>
    </>
  )
}

export default NewInfoList
