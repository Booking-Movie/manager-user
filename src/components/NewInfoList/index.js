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
        <div className="grid grid-cols-2">
          <div className="new-image col-span-1">
            <img className="new-image_content" src={new_image} alt="ImageNew Info" />
          </div>
          <div className="new-info col-span-1">
            <h3 className="text-gray-900 ">{new_title.length > 20 ? new_title.substr(0, 20) + '...' : new_title}</h3>
            <p className=" text-gray-900">
              {new_introduction.length > 50 ? new_introduction.substr(0, 50) + '...' : new_introduction}
            </p>
          </div>
        </div>
        <button
          onClick={handleShowEditNewModal}
          className=" bg-transparent absolute w-full h-full left-0 top-0 cursor-pointer rounded-xl"
        />
        {showEditNewModal && (
          <Modal onCancel={handleCloseEditNewModal} headerText={`${new_title}`}>
            <InfoNew newInfo={props.newItem} />
          </Modal>
        )}
      </div>
    </>
  )
}

export default NewInfoList
