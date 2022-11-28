import { useContext, useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../../../context/auth.context';

import { Button } from '../../../Button';

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    console.log(username, password);
    login(username, password)
  }

  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword(prev => !prev);

  return (
    <>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Username" value={username} onChange={handleChangeUsername} />
      </div>

      <div className="input-group mb-3">
        <input type={isPassword ? 'password' : 'text'} className="form-control" placeholder="Password ..." value={password} onChange={handleChangePassword} />
        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button onClick={handleSubmit}>Log In</Button>
    </>
  );
};