import Checkbox from '@app/components/checkbox/Checkbox';

const TEMPERATURE_2M = 'temperature_2m';
const RELATIVEHUMIDITY_2M = 'relativehumidity_2m';
const DEWPOINT_2M = 'dewpoint_2m';

type HourVariableProps = {
  variables: Set<string>;
  setVariables: (variables: Set<string>) => void;
};

function HourVariable({ variables, setVariables }: HourVariableProps) {
  return (
    <div className='grid grid-cols-12 gap-8'>
      <div className='col-span-3'>
        <Checkbox
          id={TEMPERATURE_2M}
          isChecked={variables.has(TEMPERATURE_2M)}
          onChange={e => {
            if (e.target.checked) setVariables(new Set([...variables, TEMPERATURE_2M]));
            else setVariables(new Set([...variables].filter(v => v !== TEMPERATURE_2M)));
          }}
        >
          Temperature (2 m)
        </Checkbox>
        <Checkbox
          id={RELATIVEHUMIDITY_2M}
          isChecked={variables.has(RELATIVEHUMIDITY_2M)}
          onChange={e => {
            if (e.target.checked) setVariables(new Set([...variables, RELATIVEHUMIDITY_2M]));
            else setVariables(new Set([...variables].filter(v => v !== RELATIVEHUMIDITY_2M)));
          }}
        >
          Relative Humidity (2 m)
        </Checkbox>
        <Checkbox
          id={DEWPOINT_2M}
          isChecked={variables.has(DEWPOINT_2M)}
          onChange={e => {
            if (e.target.checked) setVariables(new Set([...variables, DEWPOINT_2M]));
            else setVariables(new Set([...variables].filter(v => v !== DEWPOINT_2M)));
          }}
        >
          Dewpoint (2 m)
        </Checkbox>
      </div>
      <div className='col-span-3'>
        <Checkbox id='weathercode'>Weathercode</Checkbox>
        <Checkbox id='pressure_msl'>Sealevel Pressure</Checkbox>
        <Checkbox id='surface_pressure'>Surface Pressure</Checkbox>
      </div>
      <div className='col-span-3'>
        <Checkbox id='windspeed_10m'>Wind Speed (10 m)</Checkbox>
        <Checkbox id='windspeed_80m'>Wind Speed (80 m)</Checkbox>
        <Checkbox id='windspeed_120m'>Wind Speed (120 m)</Checkbox>
      </div>
      <div className='col-span-3'>
        <Checkbox id='soil_temperature_0cm'>Soil Temperature (0 cm)</Checkbox>
        <Checkbox id='soil_temperature_6cm'>Soil Temperature (6 cm)</Checkbox>
        <Checkbox id='soil_temperature_18cm'>Soil Temperature (18 cm)</Checkbox>
      </div>
    </div>
  );
}

export default HourVariable;
