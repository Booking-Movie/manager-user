/* eslint-disable prettier/prettier */
import * as Icon from 'react-feather';
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Label from '../../components/Label';
import InputComponent from '../../components/InputComponent';
import { Button } from '../../components/Button';
import { signUp } from '../../redux/Action/Auth_Action';
import axios from 'axios';

const Signup = () => {
  const dispatch = useDispatch()
  const [img, setImg] = useState('')
  const history = useHistory()
  // const { userList } = useSelector(state => state.ManagerAuthReducer)
  const [form, setForm] = useState({
    username: "",
    password: "",
    fullname: "",
    address: "",
    email: "",
    phone: "",
    avatar: {},
  })
  const [formValidation, setFormValidation] = useState({
    usernameValidation: "",
    passwordValidation: "",
    fullnameValidation: "",
    emailValidation: "",
    phoneValidation: "",
  });
  const checkExist = useCallback((email) => {
    axios({
      url: `http://localhost:7000/api/v1/check/email/${email}`,
      method: 'GET'
    })
      .then(res => {
        const emailRegex =
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailRegexCheck = email.match(emailRegex);
        if (email === '') {
          setFormValidation({
            ...formValidation,
            emailValidation: 'warning',
          });
        } else if (res.data?.length !== 0) {
          setFormValidation({
            ...formValidation,
            emailValidation: 'error-existed',
          });
        } else if (!emailRegexCheck) {
          setFormValidation({
            ...formValidation,
            emailValidation: 'error-format',
          });
        } else if (res.data?.length === 0 && emailRegexCheck) {
          setFormValidation({
            ...formValidation,
            emailValidation: 'success',
          });
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [formValidation])
  const checkExistUsername = useCallback((username) => {
    axios({
      url: `http://localhost:7000/api/v1/check/username/${username}`,
      method: 'GET'
    })
      .then(res => {
        if (res.data?.length !== 0) {
          setFormValidation({
            ...formValidation,
            usernameValidation: 'error-existed',
          });
        } else if (res.data?.length === 0) {
          setFormValidation({
            ...formValidation,
            usernameValidation: 'success',
          });
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [formValidation])
  const [isFormValidated, setIsFormValidated] = useState(false);
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file.type === 'image/webp' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png' || file.type === 'image/jpeg') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result)
      }
    }
    setForm({
      ...form,
      [e.target.name]: file
    })
  }
  const handleChange = async (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })

    // Check validation username
    if (e.target.name === 'username') {
      if (e.target.value.trim() === '') {
        setFormValidation({
          ...formValidation,
          usernameValidation: 'warning',
        });
      } else {
        checkExistUsername(e.target.value.trim())
      }
    }
    // Check validation password
    if (e.target.name === 'password') {
      if (e.target.value.trim() === '') {
        setFormValidation({
          ...formValidation,
          passwordValidation: 'warning',
        });
      } else {
        const passwordCheckResult = e.target.value.length >= 6;

        if (passwordCheckResult) {
          setFormValidation({
            ...formValidation,
            passwordValidation: 'success',
          });
        } else {
          setFormValidation({
            ...formValidation,
            passwordValidation: 'error',
          });
        }
      }
    }

    // Check validation fullname
    if (e.target.name === 'fullname') {
      if (e.target.value.trim() === '') {
        setFormValidation({
          ...formValidation,
          fullnameValidation: 'warning',
        });
      } else {
        setFormValidation({
          ...formValidation,
          fullnameValidation: 'success',
        });
      }
    }

    // Check validation email
    if (e.target.name === 'email') {
      if (e.target.value.trim() === '') {
        setFormValidation({
          ...formValidation,
          emailValidation: 'warning',
        });
      } else {
        checkExist(e.target.value.trim())
      }
    }
    if (e.target.name === 'phone') {
      if (e.target.value.trim() === '') {
        setFormValidation({
          ...formValidation,
          phoneValidation: '',
        });
      } else {

        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const phoneCheckResult = e.target.value.match(phoneRegex);
        if (phoneCheckResult) {
          setFormValidation({
            ...formValidation,
            phoneValidation: 'success',
          });
        } else {
          setFormValidation({
            ...formValidation,
            phoneValidation: 'warning',
          });
        }
      }
    }
  }

  useEffect(() => {
    if (
      // formValidation.usernameValidation === 'success' &&
      formValidation.passwordValidation === 'success' &&
      formValidation.emailValidation === 'success'
    ) {
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
    }
  }, [formValidation, isFormValidated])
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    for (let key in form) {
      if (key !== "avatar") {
        formData.append(key, form[key])
      } else {
        formData.append('avatar', form.avatar)
      }
    }

    dispatch(signUp(formData, goToSignin))
  }
  const goToSignin = () => {
    history.push("/sign-in")
  }
  return (
    <div className='flex justify-center py-6'>
      <div className='signup-container'>
        <div className="text-center my-5">
          <h1 className="font-semibold text-black text-3xl">Register From</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Username</Label>
              <InputComponent type="text" name="username" onChange={handleChange} />
            </div>
            {formValidation &&
              (formValidation['usernameValidation'] === 'success' ? (
                <div className="label-success">This username address is valid.</div>
              ) : formValidation['usernameValidation'] === 'warning' ? (
                <div className="label-warning">Please input the username.</div>
              ) : formValidation['usernameValidation'] === 'error-existed' ? (
                <div className="label-error">
                  This username has been registered in the system. Please try another one.
                </div>
              ) : null)}
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Password</Label>
              <InputComponent type="text" name="password" onChange={handleChange} />
            </div>
            {formValidation &&
              (formValidation['passwordValidation'] === 'success' ? (
                <div className="label-success">This password is valid.</div>
              ) : formValidation['passwordValidation'] === 'warning' ? (
                <div className="label-warning">Please input the password.</div>
              ) : formValidation['passwordValidation'] === 'error' ? (
                <div className="label-error">Password must be greater than 6 characters.</div>
              ) : null)}

            <div className="flex flex-col gap-2">
              <Label size="text-normal">Full Name</Label>
              <InputComponent type="text" name="fullname" onChange={handleChange} />
            </div>
            {formValidation && (formValidation['fullnameValidation'] === 'success' ? (
              <div className="label-success">This fullname is valid.</div>
            ) : formValidation['fullnameValidation'] === 'warning' ? (
              <div className="label-warning">Please input the fullname.</div>
            ) : null)}

            <div className="flex flex-col gap-2">
              <Label size="text-normal">Address</Label>
              <InputComponent type="text" name="address" onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Email</Label>
              <InputComponent type="email" name="email" onChange={handleChange} />
            </div>
            {formValidation &&
              (formValidation['emailValidation'] === 'success' ? (
                <div className="label-success">This email address is valid.</div>
              ) : formValidation['emailValidation'] === 'warning' ? (
                <div className="label-warning">Please input the email address.</div>
              ) : formValidation['emailValidation'] === 'error-format' ? (
                <div className="label-error">
                  This email has an invalid email address format. Please try again.
                </div>
              ) : formValidation['emailValidation'] === 'error-existed' ? (
                <div className="label-error">
                  This email has been registered in the system. Please try another one.
                </div>
              ) : null)}
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Phone Number</Label>
              <InputComponent type="phone" name="phone" onChange={handleChange} />
            </div>
            {formValidation && formValidation['phoneValidation'] === 'warning' ? (
              <div className="label-warning">Invalid phone number format.</div>
            ) : formValidation && formValidation['phoneValidation'] === 'success' ? (
              <div className="label-success">This phone number is valid.</div>
            ) : null}

            <div className="flex flex-col gap-2">
              <Label size="text-normal">Image Movie</Label>
              <InputComponent type="file" name="avatar" onChange={handleChangeFile} />
              <img style={{ width: 150, height: 150 }} src={img} />
            </div>
            <Button icon
              disabled={!isFormValidated}
              className={`${isFormValidated ? `btn-primary ` : `btn-disabled`
                }  md:lg:self-start md:px-4 md:py-2 lg:self-start lg:px-4 lg:py-2 self-stretch`}
            >
              <Icon.UserPlus size={32} color={`${isFormValidated ? `white` : `#c6c6c6`}`} />
              <span className='text-base font-semibold'>Create New Account</span>
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-hero-img bg-scroll bg-cover bg-no-repeat w-[100vw] fixed top-0 right-0 bottom-0 left-0 z-0 blur"></div>
    </div>
  )
}

export default Signup