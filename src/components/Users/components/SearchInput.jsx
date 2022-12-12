import { useDispatch, useSelector } from "react-redux";
import { changeSearchAction } from "../../../redux/users/slice.users";

export const SearchInput = () => {
  const value = useSelector(state => state.users.search)
  const dispatch = useDispatch()

  const handleChangeSearch = event => {
    const { value } = event.target;
    dispatch(changeSearchAction(value))
  };

  const handleResetSearch = () => {
    dispatch(changeSearchAction(''))
  }; 

  return (
    <div className="input-group input-group-lg mb-5">
      <input type="text" className="form-control" placeholder="Type to search ..." value={value} onChange={handleChangeSearch} />
      <button className="btn btn-outline-secondary" type="button" onClick={handleResetSearch}>
        Reset
      </button>
    </div>
  );
};