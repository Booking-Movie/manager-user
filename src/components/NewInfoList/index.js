import { useCallback, useState } from 'react'
import InfoNew from '../InfoNew'
import Modal from '../Modal'

const NewInfoList = props => {
  console.log('🚀 ~ file: index.js ~ line 8 ~ props', props)
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
      <div className="flex flex-row relative gap-y-5 h-auto sm:flex-col md:flex-col sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 cursor-pointer rounded-xl text-white shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70 border-2">
        <button
          onClick={handleShowEditNewModal}
          className=" bg-transparent absolute w-full h-full left-0 top-0 cursor-pointer rounded-xl"
        />
        {showEditNewModal && (
          <Modal onCancel={handleCloseEditNewModal} headerText={`${new_title}`}>
            <InfoNew newInfo={props.newItem} />
          </Modal>
        )}
        <div className="w-full h-60 max-h-96 overflow-hidden ">
          <img
            className="object-fill w-full h-60 max-h-auto lg:rounded-bl-xl lg:rounded-tl-xl md:rounded-tl-xl md:rounded-tr-xl sm:rounded-tl-xl sm:rounded-tr-xl"
            src={new_image}
            alt="ImageNew Info"
          />
        </div>
        <div className="flex flex-col p-4 leading-normal flex-wrap">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{new_title}</h5>
          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
            {new_introduction.length > 50 ? new_introduction.substr(0, 50) + '...' : new_introduction}
          </p>
        </div>
      </div>
    </>
  )
}

export default NewInfoList
