import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserAction, toggleModalAction } from '../../../redux/users/slice.users';

const skilsList = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];

export const NewUserForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [isOpenToWork, setIsOpenToWork] = useState(false)
  const [skils, setSkills] = useState([])

  const dispatch = useDispatch()

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value)
  };
  const handleChangeEmail = event => {
    const { value } = event.target;
    setEmail(value)
  };
  const handleChangeBio = event => {
    const { value } = event.target;
    setBio(value)
  };

  const handleChangeAvailability = () => {
    setIsOpenToWork(prev => !prev)
  };

  const handleSkilsUpdate = event => {
    const { value } = event.target;
    setSkills([value])
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createUserAction({name, email, bio, isOpenToWork, skils}))
  };


  return (
    <form action="#" autoComplete="off" className="w-100" onSubmit={handleSubmit}>
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input type="text" name="name" className="form-control" value={name} onChange={handleChangeName} />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input type="email" name="email" className="form-control" value={email} onChange={handleChangeEmail} />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea name="bio" className="form-control" value={bio} onChange={handleChangeBio} />
        </label>
      </div>

      <fieldset className="mt-3">
        <legend className="h6">Availability:</legend>

        <div className="form-check">
          <label className="form-check-label">
            <span>Is open to work</span>
            <input
              className="form-check-input"
              type="checkbox"
              name="isOpenToWork"
              value={isOpenToWork}
              onChange={handleChangeAvailability}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-3">
        <legend className="h6">Skils:</legend>

        <div className="d-flex">
          {skilsList.map(skil => (
            <div key={skil.value} className="form-check me-5">
              <label className="form-check-label">
                <span>{skil.label}</span>
                <input
                  name={skil.value}
                  type="checkbox"
                  className="form-check-input"
                  checked={skils.includes(skil.value)}
                  onChange={handleSkilsUpdate}
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="d-flex flex-column mt-5">
        <button type="button" className="btn py-2 btn-light w-100 mb-2" onClick={() => dispatch(toggleModalAction())}>
          Cancel
        </button>
        <button type="submit" className="btn py-2 btn-primary w-100">
          Create user
        </button>
      </div>
    </form>
  );
}
