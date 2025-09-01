import * as THREE from 'three';

// New interfaces from user spec
export interface OrbitalElements {
  aKm: number;
  e: number;
  iDeg: number;
  lanDeg: number;       // Ω
  argPeriDeg: number;   // ω
  meanAnomalyDeg: number; // M0 at epoch
  epochISO: string;
}

export interface EduContent {
  shortDescription?: string;
  longDescription?: string;
  thumbnail?: string;
  image?: string;
  readMoreUrl?: string;
  sourceName?: string;
  license?: string;
}

export interface RingBand {
  innerRadius: number;
  outerRadius: number;
  type?: string;
}

export interface RingArc {
  innerRadius: number;
  outerRadius: number;
  thetaStart: number;
  thetaLength: number;
}

export interface Rings {
  type: string;
  color: number | string;
  bands: RingBand[];
  texture?: string;
  arcs?: RingArc[];
}

export interface CelestialBody {
  id: string;
  parentId: string | null;
  name: string;
  radius: number;
  color: number;
  semiMajorAxis: number; // In AU for planets, can be 0 for moons
  orbitalPeriod: number; // In days
  eccentricity: number;
  texture?: string;
  rings?: Rings;
  axialTilt?: number;
  semiMajorAxisKm?: number; // For moons, this is the primary distance. For planets, it's derived.

  // New optional fields
  orbitalElements?: OrbitalElements;
  edu?: EduContent;

  // Runtime properties, not part of the static data
  group?: THREE.Group;
  mesh?: THREE.Object3D;
  orbit?: THREE.Line;
}

// Renamed from planetData to reflect that it contains all bodies.
export const celestialBodyData: CelestialBody[] = [
    { id: 'sun', parentId: null, name: 'Sun', radius: 696340, color: 0xffff00, semiMajorAxis: 0, orbitalPeriod: 1, eccentricity: 0 },
    { id: 'mercury', parentId: 'sun', name: 'Mercury', radius: 2440, color: 0x888888, semiMajorAxis: 0.387, orbitalPeriod: 88.0, eccentricity: 0.206, texture: 'assets/8k_mercury.jpg' },
    { id: 'venus', parentId: 'sun', name: 'Venus', radius: 6052, color: 0xeeeeaa, semiMajorAxis: 0.723, orbitalPeriod: 224.7, eccentricity: 0.007, texture: 'assets/4k_venus_atmosphere.jpg' },
    {
        id: 'earth',
        parentId: 'sun',
        name: 'Earth',
        radius: 6371,
        color: 0x4d90fe,
        semiMajorAxis: 1.0,
        orbitalPeriod: 365.2,
        eccentricity: 0.017,
        texture: 'assets/earth.jpeg',
        orbitalElements: {
            aKm: 149598023,
            e: 0.0167086,
            iDeg: 0.00005,
            lanDeg: -11.26064,
            argPeriDeg: 114.20783,
            meanAnomalyDeg: 358.617,
            epochISO: '2000-01-01T12:00:00Z'
        },
        edu: {
            shortDescription: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land with the remaining 70.8% being covered with water.',
            thumbnail: 'assets/earth.jpeg',
            readMoreUrl: 'https://en.wikipedia.org/wiki/Earth',
            sourceName: 'Wikipedia',
            license: 'CC BY-SA 3.0'
        }
    },
    { id: 'mars', parentId: 'sun', name: 'Mars', radius: 3390, color: 0xff0000, semiMajorAxis: 1.524, orbitalPeriod: 687.0, eccentricity: 0.093, texture: 'assets/8k_mars.jpg' },
    { id: 'jupiter', parentId: 'sun', name: 'Jupiter', radius: 69911, color: 0xffd8ad, semiMajorAxis: 5.204, orbitalPeriod: 4331, axialTilt: 3.08, eccentricity: 0.048, texture: 'assets/2k_jupiter.jpg',
        rings: { type: 'jupiter', color: 0x9B8B80, bands: [ { innerRadius: 92000, outerRadius: 122500, type: 'halo' }, { innerRadius: 122500, outerRadius: 129000, type: 'main' }, { innerRadius: 129000, outerRadius: 182000, type: 'gossamer' }, { innerRadius: 129000, outerRadius: 226000, type: 'gossamer' } ] }
    },
    { id: 'saturn', parentId: 'sun', name: 'Saturn', radius: 58232, color: 0xf0e5c8, semiMajorAxis: 9.582, orbitalPeriod: 10747, axialTilt: 26.73, eccentricity: 0.054, texture: 'assets/8k_saturn.jpg',
        rings: { type: 'saturn', texture: 'assets/8k_saturn_ring_alpha.jpg', color: 0xFFFEEA, bands: [ { innerRadius: 74658, outerRadius: 92000 }, { innerRadius: 92000, outerRadius: 117580 }, { innerRadius: 122170, outerRadius: 136775 } ] }
    },
    { id: 'uranus', parentId: 'sun', name: 'Uranus', radius: 25362, color: 0xAFDBF5, semiMajorAxis: 19.229, orbitalPeriod: 30589, axialTilt: 97.92, eccentricity: 0.047, texture: 'assets/2k_uranus.jpg',
        rings: { type: 'uranus', color: 0x36454F, bands: [ { innerRadius: 41836, outerRadius: 41838 }, { innerRadius: 42233, outerRadius: 42236 }, { innerRadius: 42568, outerRadius: 42572 }, { innerRadius: 44714, outerRadius: 44722 }, { innerRadius: 45657, outerRadius: 45665 }, { innerRadius: 47174, outerRadius: 47176 }, { innerRadius: 47625, outerRadius: 47629 }, { innerRadius: 48297, outerRadius: 48303 }, { innerRadius: 51120, outerRadius: 51178 } ] }
    },
    { id: 'neptune', parentId: 'sun', name: 'Neptune', radius: 24622, color: 0x3d5ef5, semiMajorAxis: 30.109, orbitalPeriod: 59800, axialTilt: 29.6, eccentricity: 0.009, texture: 'assets/2k_neptune.jpg',
        rings: { type: 'neptune', color: 0x607B8B, bands: [ { innerRadius: 40900, outerRadius: 42900 }, { innerRadius: 53143, outerRadius: 53257 }, { innerRadius: 53200, outerRadius: 57200 }, { innerRadius: 62914, outerRadius: 62950 } ], arcs: [ { innerRadius: 62914, outerRadius: 62950, thetaStart: (247 * Math.PI / 180), thetaLength: (10 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (261 * Math.PI / 180), thetaLength: (3 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (265 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (276 * Math.PI / 180), thetaLength: (4 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (284.5 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) } ] }
    },

    // Moons
    { id: 'moon', parentId: 'earth', name: 'Moon', radius: 1737, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 384400, orbitalPeriod: 27.3, eccentricity: 0.0549 },
    { id: 'io', parentId: 'jupiter', name: 'Io', radius: 1821, color: 0xE5C851, semiMajorAxis: 0, semiMajorAxisKm: 421600, orbitalPeriod: 1.77, eccentricity: 0.0041 },
    { id: 'europa', parentId: 'jupiter', name: 'Europa', radius: 1560, color: 0x8B7D82, semiMajorAxis: 0, semiMajorAxisKm: 670900, orbitalPeriod: 3.55, eccentricity: 0.009 },
    { id: 'ganymede', parentId: 'jupiter', name: 'Ganymede', radius: 2634, color: 0x9E978E, semiMajorAxis: 0, semiMajorAxisKm: 1070000, orbitalPeriod: 7.15, eccentricity: 0.0013 },
    { id: 'callisto', parentId: 'jupiter', name: 'Callisto', radius: 2410, color: 0x5C5C5C, semiMajorAxis: 0, semiMajorAxisKm: 1883000, orbitalPeriod: 16.69, eccentricity: 0.0074 },
    { id: 'mimas', parentId: 'saturn', name: 'Mimas', radius: 198, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 185539, orbitalPeriod: 0.94, eccentricity: 0.0196 },
    { id: 'enceladus', parentId: 'saturn', name: 'Enceladus', radius: 250, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 238042, orbitalPeriod: 1.4, eccentricity: 0.0047 },
    { id: 'titan', parentId: 'saturn', name: 'Titan', radius: 2575, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 1221865, orbitalPeriod: 16, eccentricity: 0.0288 },
    { id: 'iapetus', parentId: 'saturn', name: 'Iapetus', radius: 718, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 3560854, orbitalPeriod: 79.33, eccentricity: 0.0283 },
    { id: 'miranda', parentId: 'uranus', name: 'Miranda', radius: 236, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 129846, orbitalPeriod: 1.413, eccentricity: 0.0013 },
    { id: 'ariel', parentId: 'uranus', name: 'Ariel', radius: 579, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 190929, orbitalPeriod: 2.520, eccentricity: 0.0012 },
    { id: 'umbriel', parentId: 'uranus', name: 'Umbriel', radius: 585, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 265986, orbitalPeriod: 4.144, eccentricity: 0.0039 },
    { id: 'titania', parentId: 'uranus', name: 'Titania', radius: 789, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 436298, orbitalPeriod: 8.706, eccentricity: 0.0011 },
    { id: 'proteus', parentId: 'neptune', name: 'Proteus', radius: 209, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 117600, orbitalPeriod: 1.122, eccentricity: 0.0005 },
    { id: 'triton', parentId: 'neptune', name: 'Triton', radius: 1350, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 354760, orbitalPeriod: -5.877, eccentricity: 0.000016 },
    { id: 'nereid', parentId: 'neptune', name: 'Nereid', radius: 170, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 5513400, orbitalPeriod: 360.13, eccentricity: 0.7507 },
];
