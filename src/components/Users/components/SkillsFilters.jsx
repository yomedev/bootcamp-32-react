const skillsList = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
]

export const SkillsFilters = ({ onChangeSkills, value }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skils:</legend>

      <div className="d-flex">
        {skillsList.map(skill => (
          <div key={skill.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.label}</span>
              <input className="form-check-input" type="radio" name="skil" value={skill.value} onChange={onChangeSkills} checked={skill.value === value} />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};