import s from './Filter.module.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ value, onChange }: Props) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
