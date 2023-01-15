import { createContext, PropsWithChildren, useContext } from 'react';

type temperatureUnit = 'celsius' | 'fahrenheit';
type windSpeedUnit = 'km/h' | 'm/s' | 'mph' | 'kn';
type precipitationUnit = 'milimeter' | 'inch';
type timezoneUnit = string;
type pastDayUnit = string;

type SettingsUnit = {
  temperatureUnit: temperatureUnit;
  windSpeedUnit: windSpeedUnit;
  precipitationUnit: precipitationUnit;
  timezoneUnit: timezoneUnit;
  pastDayUnit: pastDayUnit;
};

const defaultSettings: { settings: SettingsUnit; updateSettings: (settings: SettingsUnit) => void } = {
  settings: {
    temperatureUnit: 'celsius',
    windSpeedUnit: 'km/h',
    precipitationUnit: 'milimeter',
    timezoneUnit: 'GMT',
    pastDayUnit: '0',
  },
  updateSettings: (_: SettingsUnit) => {
    return;
  },
};

const SettingsContext = createContext(defaultSettings);

type SettingsProviderValue = {
  settings: SettingsUnit;
  updateSettings: (settings: SettingsUnit) => void;
};

const SettingsProvider = ({ children, value }: { value: SettingsProviderValue } & PropsWithChildren) => (
  <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
);

const useSettings = () => useContext(SettingsContext);

export type { SettingsUnit };
export { useSettings, SettingsProvider, defaultSettings };
