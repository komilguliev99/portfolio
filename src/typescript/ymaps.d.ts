/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace ymaps {
	export function ready(): Promise;

	class Promise {
	  then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: any): Promise;
	}

	export class Map {
	  constructor(element: string | any, state: MapState);
	  geoObjects: GeoObjects;
	}

	export class GeoObjects {
	    add(placemark: Placemark): Map;
	}

	export class Placemark {
	    constructor (coord: number[], conf: any, conf2: any);
	}

	export class MapState {
	  center: number[];
	  controls: string[];
	  zoom: number;
	}
  }
