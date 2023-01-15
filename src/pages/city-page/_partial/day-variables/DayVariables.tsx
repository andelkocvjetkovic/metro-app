import Checkbox from '@app/components/checkbox/Checkbox';

function DayVariables() {
  return (
    <div className='grid grid-cols-12 gap-12'>
      <div className='col-span-6'>
        <Checkbox id='weathercode_daily'>Weathercode</Checkbox>
        <Checkbox id='temperature_2m_max'>Maximum Temperature (2 m)</Checkbox>
        <Checkbox id='apparent_temperature_max'>Maximum Apparent Temperature (2 m)</Checkbox>
      </div>
      <div className='col-span-6'>
        <Checkbox id='precipitation_sum'>Precipitation Sum</Checkbox>
        <Checkbox id='rain_sum'>Rain Sum</Checkbox>
        <Checkbox id='showers_sum'>Showers Sum</Checkbox>
      </div>
    </div>
  );
}

export default DayVariables;
