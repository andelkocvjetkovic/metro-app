import { PropsWithChildren } from 'react';
import RadioButton from '@app/components/radio-button/RadioButton';
import Select from '@app/components/select/Select';
import { useSettings, defaultSettings } from '@app/hook/use-settings/useSettings';
import { useFavoriteCity } from '@app/hook/use-favorite-cities/useFavoriteCites';
import OutlineButton from '@app/components/outline-button/OutlineButton';

const TimeZones = [
  'America/Anchorage',
  'America/Los_Angeles',
  'America/Denver',
  'America/Chicago',
  'America/New_York',
  'America/Sao_Paulo',
  'GMT',
  'auto',
  'Europe/London',
  'Europe/Berlin',
  'Europe/Moscow',
  'Africa/Cairo',
  'Asia/Bangkok',
  'Asia/Singapore',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Pacific/Auckland',
];

const pastDay = ['0', '1', '2', '3', '5', '7', '14', '31', '61', '92'];

function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const { temperatureUnit, windSpeedUnit, precipitationUnit, timezoneUnit, pastDayUnit } = settings;
  const { clearCities, cities } = useFavoriteCity();
  return (
    <div className='flex flex-col gap-10 mt-6'>
      <h1 className='text-3xl text-center text-gray-500'>Application Settings</h1>
      <SettingContainer>
        <h4 className='text-lg'>Temperature Unit</h4>
        <RadioGroupContainer>
          <RadioButton
            value='celsius'
            isChecked={temperatureUnit === 'celsius'}
            id='celsius'
            onChange={() => {
              updateSettings({ ...settings, temperatureUnit: 'celsius' });
            }}
          >
            Celsius °C
          </RadioButton>
          <RadioButton
            value='fahrenheit'
            isChecked={temperatureUnit === 'fahrenheit'}
            id='fahrenheit'
            onChange={() => {
              updateSettings({ ...settings, temperatureUnit: 'fahrenheit' });
            }}
          >
            Fahrenheit °F
          </RadioButton>
        </RadioGroupContainer>
      </SettingContainer>
      <SettingContainer>
        <h4 className='text-lg'>Wind Speed Unit</h4>
        <RadioGroupContainer>
          <RadioButton
            value='km/h'
            isChecked={windSpeedUnit === 'km/h'}
            id='km/h'
            onChange={() => {
              updateSettings({ ...settings, windSpeedUnit: 'km/h' });
            }}
          >
            km/h
          </RadioButton>
          <RadioButton
            value='m/s'
            isChecked={windSpeedUnit === 'm/s'}
            id='m/s'
            onChange={() => {
              updateSettings({ ...settings, windSpeedUnit: 'm/s' });
            }}
          >
            m/s
          </RadioButton>
          <RadioButton
            value='mph'
            isChecked={windSpeedUnit === 'mph'}
            id='mph'
            onChange={() => {
              updateSettings({ ...settings, windSpeedUnit: 'mph' });
            }}
          >
            mph
          </RadioButton>
          <RadioButton
            value='kn'
            isChecked={windSpeedUnit === 'kn'}
            id='kn'
            onChange={() => {
              updateSettings({ ...settings, windSpeedUnit: 'kn' });
            }}
          >
            kn
          </RadioButton>
        </RadioGroupContainer>
      </SettingContainer>
      <SettingContainer>
        <h4 className='text-lg'>Precipitation Unit</h4>
        <RadioGroupContainer>
          <RadioButton
            value='milimeter'
            isChecked={precipitationUnit === 'milimeter'}
            id='milimeter'
            onChange={() => {
              updateSettings({ ...settings, precipitationUnit: 'milimeter' });
            }}
          >
            Milimeter
          </RadioButton>
          <RadioButton
            value='inch'
            isChecked={precipitationUnit === 'inch'}
            id='inch'
            onChange={() => {
              updateSettings({ ...settings, precipitationUnit: 'inch' });
            }}
          >
            Inch
          </RadioButton>
        </RadioGroupContainer>
      </SettingContainer>
      <SettingContainer>
        <h4 className='text-lg'>Timezone</h4>
        <div className='w-96'>
          <Select
            value={timezoneUnit}
            onChange={e => {
              updateSettings({ ...settings, timezoneUnit: e.target.value });
            }}
          >
            {TimeZones.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </div>
      </SettingContainer>
      <SettingContainer>
        <h4 className='text-lg'>Past days</h4>
        <div className='w-96'>
          <Select
            value={pastDayUnit}
            onChange={e => {
              updateSettings({ ...settings, pastDayUnit: e.target.value });
            }}
          >
            {pastDay.map(d => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </Select>
        </div>
      </SettingContainer>
      <div className='flex gap-10 justify-center'>
        <OutlineButton
          onClick={() => {
            updateSettings(defaultSettings.settings);
          }}
        >
          Revert settings to default
        </OutlineButton>
        <OutlineButton
          onClick={() => {
            clearCities();
          }}
          disabled={cities.length === 0}
        >
          Delete favourites
        </OutlineButton>
      </div>
    </div>
  );
}

export default SettingsPage;

const RadioGroupContainer = ({ children }: PropsWithChildren) => <div className='flex gap-9'>{children}</div>;

const SettingContainer = ({ children }: PropsWithChildren) => <div className='flex flex-col gap-3 items-center'>{children}</div>;
