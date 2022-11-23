import { AvailabilityFilters } from './AvailabilityFilters';
import { SearchInput } from './SearchInput';
import { SkillsFilters } from './SkillsFilters';
import { FiPlus } from 'react-icons/fi'

export const UserFilters = ({ filters, onChangeAvailability, onChangeSkills, onChangeSearch, onResetSearch }) => {
  const { isAvailable, skills, search } = filters
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters value={isAvailable} onChangeAvailability={onChangeAvailability} />
        <SkillsFilters onChangeSkills={onChangeSkills} value={skills} />
        <button type="button" className="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput value={search} onChangeSearch={onChangeSearch} onResetSearch={onResetSearch} />
    </>
  );
};