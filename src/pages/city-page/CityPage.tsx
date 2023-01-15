import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import allCities from '@app/cities';
import Select from '@app/components/select/Select';
import HourVariable from '@app/pages/city-page/_partial/hour-variables/HourVariables';
import DayVariables from '@app/pages/city-page/_partial/day-variables/DayVariables';

type VariableView = 'hour' | 'day' | undefined;

function CityPage() {
  const params = useParams();
  const [variableView, setVariableView] = useState<VariableView>(undefined);
  const [hourVariables, setHourVariables] = useState<Set<string>>(new Set());
  const [dayVariables, setDayVariables] = useState<string[]>([]);

  const city = useMemo(() => (params.cityId ? allCities.find(c => c.cityId === params.cityId) : undefined), [params]);

  if (!city) return <div>No city found</div>;

  console.log(hourVariables);

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-gray-500 text-center mt-6'>Meteorologic data for {city.name}</h1>
      <div className='w-96 mx-auto mt-6'>
        <Select value={variableView} onChange={e => setVariableView(e.target.value as VariableView)}>
          <option value='' disabled>
            Select variables
          </option>
          <option value='hour'>Hourly view</option>
          <option value='day'>Daily view</option>
        </Select>
      </div>
      <div className='mt-8 mx-auto'>
        {variableView ? (
          variableView === 'hour' ? (
            <HourVariable
              variables={hourVariables}
              setVariables={(variables: Set<string>) => {
                setHourVariables(variables);
              }}
            />
          ) : (
            <DayVariables variables={dayVariables} />
          )
        ) : undefined}
      </div>
    </div>
  );
}

export default CityPage;
