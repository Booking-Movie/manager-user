import { Button } from '../Button'
import InputComponent from '../Input'
import Label from '../Label'
import * as Icon from 'react-feather'

const ContactFrom = () => {
  const handleChange = e => {
    e.preventDefault()
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <div className="rounded-md shadow-shadowbox_2 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex sm:flex-col gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label size="text-normal">Name</Label>
                <InputComponent type="text" onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label size="text-normal">Email</Label>
                <InputComponent type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Phone Number</Label>
              <InputComponent type="text" onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Message</Label>
              <InputComponent type="textarea" name="new_title" onChange={handleChange} />
            </div>
            <Button icon className="btn-primary self-start sm:self-stretch lg:self-start">
              <Icon.MessageCircle size={32} className="hover:text-white " />
              <span className="text-base font-semibold">Send Message</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactFrom
