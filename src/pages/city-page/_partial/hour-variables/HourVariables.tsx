import Checkbox from '@app/components/checkbox/Checkbox';
import { useSearchParams } from 'react-router-dom';

const TEMPERATURE_2M = 'temperature_2m';
const RELATIVEHUMIDITY_2M = 'relativehumidity_2m';
const DEWPOINT_2M = 'dewpoint_2m';

function HourVariable() {
  const [searchParam, setSearchParam] = useSearchParams();
  const variables = searchParam.getAll('hourly');
  return (
    <div className='grid grid-cols-12 gap-8'>
      <div className='col-span-3'>
        <Checkbox
          id={TEMPERATURE_2M}
          isChecked={variables.includes(TEMPERATURE_2M)}
          onChange={e => {
            if (e.target.checked) setSearchParam({ hourly: [...variables, TEMPERATURE_2M] });
            else setSearchParam({ hourly: variables.filter(v => v !== TEMPERATURE_2M) });
          }}
        >
          Temperature (2 m)
        </Checkbox>
        <Checkbox
          id={RELATIVEHUMIDITY_2M}
          isChecked={variables.includes(RELATIVEHUMIDITY_2M)}
          onChange={e => {
            if (e.target.checked) setSearchParam({ hourly: [...variables, RELATIVEHUMIDITY_2M] });
            else setSearchParam({ hourly: variables.filter(v => v !== RELATIVEHUMIDITY_2M) });
          }}
        >
          Relative Humidity (2 m)
        </Checkbox>
        <Checkbox
          id={DEWPOINT_2M}
          isChecked={variables.includes(DEWPOINT_2M)}
          onChange={e => {
            if (e.target.checked) setSearchParam({ hourly: [...variables, DEWPOINT_2M] });
            else setSearchParam({ hourly: variables.filter(v => v !== DEWPOINT_2M) });
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
