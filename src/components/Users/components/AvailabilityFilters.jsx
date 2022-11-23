export const AvailabilityFilters = ({ value, onChangeAvailability }) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Open to work</span>
          <input className="form-check-input" type="checkbox" checked={value} onChange={onChangeAvailability} />
        </label>
      </div>
    </fieldset>
  );
};