import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const TransportType = {
  DRIVING: 'd',
  WALKING: 'w',
  PUBLIC_TRANSPORT: 'r',
};

export const androidMapAppType = {
  localisation: 'geo://',
  navigation: 'google.navigation://',
};

export const createURLParams = (
  baseURL: string,
  params: Array<{param: string; value: string}>,
): string =>
  `${baseURL}?${params
    .filter(p => p?.value && p.value !== '' && p.value !== ',')
    .map(p => `${p.param}=${encodeURI(p.value)}`)
    .join('&')}`;

export const mapURLBuilder = (
  address?: string,
  destination?: string,
  latitude?: number,
  longitude?: number,
  transportType: string = TransportType[Platform.OS].CAR,
) => {
  return isIOS
    ? iosMapURLBuilder(address, destination, latitude, longitude, transportType)
    : androidMapURLBuilder(
        address,
        destination,
        latitude,
        longitude,
        transportType,
      );
};

export const iosMapURLBuilder = (
  address?: string,
  destination?: string,
  latitude?: number,
  longitude?: number,
  transportType: string = TransportType.DRIVING,
) => {
  const params = [
    {param: 'q', value: address},
    {param: 'saddr', value: address},
    {param: 'daddr', value: destination},
    {param: 'sll', value: `${latitude},${longitude}`},
    {param: 'dirflg', value: transportType},
  ];
  return createURLParams('maps://', params);
};

export const androidMapURLBuilder = (
  address?: string,
  destination?: string,
  latitude?: number,
  longitude?: number,
  transportType: string = TransportType.DRIVING,
) => {
  const baseURL = destination
    ? androidMapAppType.navigation
    : androidMapAppType.localisation;

  const params = destination
    ? createAndroidNavigaitonURLParams(destination, transportType)
    : createAndroidLocalisationURLParams(address, latitude, longitude);

  return createURLParams(baseURL, params);
};

export const createAndroidLocalisationURLParams = (
  address?: string,
  latitude?: number,
  longitude?: number,
) => {
  return [
    latitude && longitude
      ? {param: 'q', value: `@${latitude},${longitude}`}
      : {param: 'q', value: address},
  ];
};

export const createAndroidNavigaitonURLParams = (
  destination?: string,
  transportType: string = TransportType.DRIVING,
) => {
  return [
    {param: 'q', value: destination},
    {param: 'mode', value: transportType},
  ];
};
