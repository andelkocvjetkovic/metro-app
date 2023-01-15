import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import allCities from '@app/cities';
import Select from '@app/components/select/Select';
import HourVariable from '@app/pages/city-page/_partial/hour-variables/HourVariables';
import DayVariables from '@app/pages/city-page/_partial/day-variables/DayVariables';
import { API_BASE } from '@app/constants';
import { useSettings } from '@app/hook/use-settings/useSettings';

type VariableView = 'hour' | 'day' | '';

function CityPage() {
  const params = useParams();
  const [variableView, setVariableView] = useState<VariableView>('');

  const [hourVariables, setHourVariables] = useState<string[]>([]);
  const [dayVariables, setDayVariables] = useState<string[]>([]);
  const { settings } = useSettings();

  const city = useMemo(() => (params.cityId ? allCities.find(c => c.cityId === params.cityId) : undefined), [params]);

  const { isLoading, error, data } = useQuery(
    ['city', city, hourVariables, dayVariables, settings, variableView],
    async () => {
      const hour = hourVariables.length > 0 ? '&hourly='.concat(hourVariables.toString()) : '';
      const day = dayVariables.length > 0 ? '&daily='.concat(dayVariables.toString()) : '';
      const temperatureUnit = `&temperature_unit=${settings.temperatureUnit}`;
      const timeZone = `&timezone=${settings.timezoneUnit}`;
      const pastDayUnit = `&past_days=${settings.pastDayUnit}`;
      const windSpeedUnit = `&windspeed_unit=${settings.windSpeedUnit}`;
      const lat = `latitude=${city?.lat}`;
      const lng = `&longitude=${city?.lng}`;
      return fetch(`${API_BASE}${lat}${lng}${hour}${day}${temperatureUnit}${timeZone}${pastDayUnit}${windSpeedUnit}`).then(res =>
        res.json()
      );
    },
    { enabled: !!city && variableView !== '' }
  );

  if (!city) return <div className='text-center'>Something went wrong, try again</div>;

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-gray-500 text-center mt-6'>Meteorologic data for {city?.name}</h1>
      <div className='w-full max-w-xs mx-auto mt-6'>
        <Select value={variableView} onChange={e => setVariableView(e.target.value as VariableView)}>
          <option disabled value=''>
            -- Select variable --
          </option>
          <option value='hour'>Hourly view</option>
          <option value='day'>Daily view</option>
        </Select>
      </div>
      <div className='mt-8 mx-auto'>
        {variableView ? (
          variableView === 'hour' ? (
            <HourVariable variables={hourVariables} setVariables={setHourVariables} />
          ) : (
            <DayVariables variables={dayVariables} setVariables={setDayVariables} />
          )
        ) : undefined}
      </div>
      {isLoading && <div className='text-center'>Loading ...</div>}
      {error && <div className='text-center'>Something went wrong, try again</div>}
      {data && (
        <div className='mx-auto mt-6 max-w-full'>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CityPage;
