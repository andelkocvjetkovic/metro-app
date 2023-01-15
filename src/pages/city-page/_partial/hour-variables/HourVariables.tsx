import Checkbox from '@app/components/checkbox/Checkbox';

const TEMPERATURE_2M = 'temperature_2m';
const RELATIVEHUMIDITY_2M = 'relativehumidity_2m';
const DEWPOINT_2M = 'dewpoint_2m';
const WEATHERCODE = 'weathercode';
const PRESSURE_MSL = 'pressure_msl';
const SURFACE_PRESSURE = 'surface_pressure';
const WINDSPEED_10M = 'windspeed_10m';
const WINDSPEED_80M = 'windspeed_80m';
const WINDSPEED_120M = 'windspeed_120m';
const SOIL_TEMPERATURE_0CM = 'soil_temperature_0cm';
const SOIL_TEMPERATURE_6CM = 'soil_temperature_6cm';
const SOIL_TEMPERATURE_18CM = 'soil_temperature_18cm';

type HourVariableProps = { variables: string[]; setVariables: (newVars: string[]) => void };

function HourVariable({ variables, setVariables }: HourVariableProps) {
  return (
    <div className='grid grid-cols-12 gap-8'>
      <div className='col-span-12 md:col-span-6 lg:col-span-3'>
        <Checkbox
          id={TEMPERATURE_2M}
          isChecked={variables.includes(TEMPERATURE_2M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, TEMPERATURE_2M]);
            else setVariables(variables.filter(v => v !== TEMPERATURE_2M));
          }}
        >
          Temperature (2 m)
        </Checkbox>
        <Checkbox
          id={RELATIVEHUMIDITY_2M}
          isChecked={variables.includes(RELATIVEHUMIDITY_2M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, RELATIVEHUMIDITY_2M]);
            else setVariables(variables.filter(v => v !== RELATIVEHUMIDITY_2M));
          }}
        >
          Relative Humidity (2 m)
        </Checkbox>
        <Checkbox
          id={DEWPOINT_2M}
          isChecked={variables.includes(DEWPOINT_2M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, DEWPOINT_2M]);
            else setVariables(variables.filter(v => v !== DEWPOINT_2M));
          }}
        >
          Dewpoint (2 m)
        </Checkbox>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-3'>
        <Checkbox
          id={WEATHERCODE}
          isChecked={variables.includes(WEATHERCODE)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, WEATHERCODE]);
            else setVariables(variables.filter(v => v !== WEATHERCODE));
          }}
        >
          Weathercode
        </Checkbox>
        <Checkbox
          id={PRESSURE_MSL}
          isChecked={variables.includes(PRESSURE_MSL)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, PRESSURE_MSL]);
            else setVariables(variables.filter(v => v !== PRESSURE_MSL));
          }}
        >
          Sealevel Pressure
        </Checkbox>
        <Checkbox
          id={SURFACE_PRESSURE}
          isChecked={variables.includes(SURFACE_PRESSURE)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, SURFACE_PRESSURE]);
            else setVariables(variables.filter(v => v !== SURFACE_PRESSURE));
          }}
        >
          Surface Pressure
        </Checkbox>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-3'>
        <Checkbox
          id={WINDSPEED_10M}
          isChecked={variables.includes(WINDSPEED_10M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, WINDSPEED_10M]);
            else setVariables(variables.filter(v => v !== WINDSPEED_10M));
          }}
        >
          Wind Speed (10 m)
        </Checkbox>
        <Checkbox
          id={WINDSPEED_80M}
          isChecked={variables.includes(WINDSPEED_80M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, WINDSPEED_80M]);
            else setVariables(variables.filter(v => v !== WINDSPEED_80M));
          }}
        >
          Wind Speed (80 m)
        </Checkbox>
        <Checkbox
          id={WINDSPEED_120M}
          isChecked={variables.includes(WINDSPEED_120M)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, WINDSPEED_120M]);
            else setVariables(variables.filter(v => v !== WINDSPEED_120M));
          }}
        >
          Wind Speed (120 m)
        </Checkbox>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-3'>
        <Checkbox
          id={SOIL_TEMPERATURE_0CM}
          isChecked={variables.includes(SOIL_TEMPERATURE_0CM)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, SOIL_TEMPERATURE_0CM]);
            else setVariables(variables.filter(v => v !== SOIL_TEMPERATURE_0CM));
          }}
        >
          Soil Temperature (0 cm)
        </Checkbox>
        <Checkbox
          id={SOIL_TEMPERATURE_6CM}
          isChecked={variables.includes(SOIL_TEMPERATURE_6CM)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, SOIL_TEMPERATURE_6CM]);
            else setVariables(variables.filter(v => v !== SOIL_TEMPERATURE_6CM));
          }}
        >
          Soil Temperature (6 cm)
        </Checkbox>
        <Checkbox
          id={SOIL_TEMPERATURE_18CM}
          isChecked={variables.includes(SOIL_TEMPERATURE_18CM)}
          onChange={e => {
            if (e.target.checked) setVariables([...variables, SOIL_TEMPERATURE_18CM]);
            else setVariables(variables.filter(v => v !== SOIL_TEMPERATURE_18CM));
          }}
        >
          Soil Temperature (18 cm)
        </Checkbox>
      </div>
    </div>
  );
}

export default HourVariable;
