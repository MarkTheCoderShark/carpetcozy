import serviceAreasJson from './service-areas.json';

export interface ServiceArea {
  name: string;
  description: string;
  slug: string;
}

export const serviceAreas: ServiceArea[] = serviceAreasJson; 