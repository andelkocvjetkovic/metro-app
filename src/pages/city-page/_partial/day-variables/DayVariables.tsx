import Checkbox from '@app/components/checkbox/Checkbox';

const WEATHERCODE_DAILY = 'weathercode';
const TEMPERATURE_2M_MAX = 'temperature_2m_max';
const APPARENT_TEMPERATURE_MAX = 'apparent_temperature_max';

const PRECIPITATION_SUM = 'precipitation_sum';
const RAIN_SUM = 'rain_sum';
const SHOWERS_SUM = 'showers_sum';

type DayVariablesProps = {
  variables: string[];
  setVariables: (newVars: string[]) => void;
};

function DayVariables({ variables, setVariables }: DayVariablesProps) {
  function handleChange(isChecked: boolean, value: string) {
    if (isChecked) setVariables([...variables, value]);
    else setVariables(variables.filter(v => v !== value));
  }

  return (
    <div className='grid grid-cols-12 gap-12'>
      <div className='col-span-6'>
        <Checkbox
          id={WEATHERCODE_DAILY}
          isChecked={variables.includes(WEATHERCODE_DAILY)}
          onChange={e => handleChange(e.target.checked, WEATHERCODE_DAILY)}
        >
          Weathercode
        </Checkbox>
        <Checkbox
          id={TEMPERATURE_2M_MAX}
          isChecked={variables.includes(TEMPERATURE_2M_MAX)}
          onChange={e => handleChange(e.target.checked, TEMPERATURE_2M_MAX)}
        >
          Maximum Temperature (2 m)
        </Checkbox>
        <Checkbox
          id={APPARENT_TEMPERATURE_MAX}
          isChecked={variables.includes(APPARENT_TEMPERATURE_MAX)}
          onChange={e => handleChange(e.target.checked, APPARENT_TEMPERATURE_MAX)}
        >
          Maximum Apparent Temperature (2 m)
        </Checkbox>
      </div>
      <div className='col-span-6'>
        <Checkbox
          id={PRECIPITATION_SUM}
          isChecked={variables.includes(PRECIPITATION_SUM)}
          onChange={e => handleChange(e.target.checked, PRECIPITATION_SUM)}
        >
          Precipitation Sum
        </Checkbox>
        <Checkbox id={RAIN_SUM} isChecked={variables.includes(RAIN_SUM)} onChange={e => handleChange(e.target.checked, RAIN_SUM)}>
          Rain Sum
        </Checkbox>
        <Checkbox
          id={SHOWERS_SUM}
          isChecked={variables.includes(SHOWERS_SUM)}
          onChange={e => handleChange(e.target.checked, SHOWERS_SUM)}
        >
          Showers Sum
        </Checkbox>
      </div>
    </div>
  );
}

export default DayVariables;
