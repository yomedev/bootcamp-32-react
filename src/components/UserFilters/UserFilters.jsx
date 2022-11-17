import { AvailabilityFilters } from './AvailabilityFilters';
import { SkillsFilters } from './SkillsFilters';

export const UsersFilters = () => {
  return (
    <>
      <AvailabilityFilters />
      <SkillsFilters />
    </>
  );
};