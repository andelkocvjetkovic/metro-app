import { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import allCities from '@app/cities';
import Select from '@app/components/select/Select';
import HourVariable from '@app/pages/city-page/_partial/hour-variables/HourVariables';
import DayVariables from '@app/pages/city-page/_partial/day-variables/DayVariables';
import { API_BASE } from '@app/constants';
import { useSettings } from '@app/hook/use-settings/useSettings';

type VariableView = 'hour' | 'day' | undefined;

function CityPage() {
  const params = useParams();
  const [variableView, setVariableView] = useState<VariableView>(undefined);
  const [searchParam] = useSearchParams();

  const hourVariables = searchParam.getAll('hourly');
  const dayVariables = searchParam.getAll('daily');
  const { settings } = useSettings();

  const city = useMemo(() => (params.cityId ? allCities.find(c => c.cityId === params.cityId) : undefined), [params]);

  const { isLoading, error, data } = useQuery(
    ['city', city, hourVariables, dayVariables, settings],
    async () => {
      const hour = hourVariables.length > 0 ? '&hourly='.concat(hourVariables.toString()) : '';
      const day = dayVariables.length > 0 ? '&daily='.concat(dayVariables.toString()) : '';
      const temperatureUnit = `&temperature_unit=${settings.temperatureUnit}`;
      const timeZone = `&timezone=${settings.timezoneUnit}`;
      const pastDayUnit = `&past_days=${settings.pastDayUnit}`;
      const lat = `latitude=${city?.lat}`;
      const lng = `&longitude=${city?.lng}`;
      return fetch(`${API_BASE}${lat}${lng}${hour}${day}${temperatureUnit}${timeZone}${pastDayUnit}`).then(res => res.json());
    },
    { enabled: !!city }
  );

  if (!city) return <div>Something went wrong, try again</div>;

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-gray-500 text-center mt-6'>Meteorologic data for {city?.name}</h1>
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
        {variableView ? variableView === 'hour' ? <HourVariable /> : <DayVariables /> : undefined}
      </div>
      {isLoading && <div>Loading ...</div>}
      {error && <div>Something went wrong, try again</div>}
      {data && <div>Sucess</div>}
    </div>
  );
}

export default CityPage;
