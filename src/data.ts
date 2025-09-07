import * as THREE from 'three';

/**
 * Defines the classical orbital elements for a celestial body, used for high-precision orbit calculations.
 */
export interface OrbitalElements {
  /** Semi-major axis in kilometers. */
  aKm: number;
  /** Eccentricity of the orbit (unitless). */
  e: number;
  /** Inclination of the orbit in degrees. */
  iDeg: number;
  /** Longitude of the ascending node (Ω) in degrees. */
  lanDeg: number;
  /** Argument of periapsis (ω) in degrees. */
  argPeriDeg: number;
  /** Mean anomaly at epoch (M₀) in degrees. */
  meanAnomalyDeg: number;
  /** The reference date and time for these elements in ISO 8601 format. */
  epochISO: string;
}

/**
 * Defines the structure for educational content associated with a celestial body.
 */
export interface EduContent {
  /** A short, one-sentence description. */
  shortDescription?: string;
  /** A longer, more detailed description. */
  longDescription?: string;
  /** URL or path to a thumbnail image. */
  thumbnail?: string;
  /** URL or path to a main, high-resolution image. */
  image?: string;
  /** URL to an external page (e.g., Wikipedia) for more information. */
  readMoreUrl?: string;
  /** The source of the information (e.g., 'Wikipedia'). */
  sourceName?: string;
  /** The license under which the content is provided (e.g., 'CC BY-SA 3.0'). */
  license?: string;
}

/**
 * Defines a single, continuous band within a planet's ring system.
 */
export interface RingBand {
  /** The inner radius of the band in kilometers. */
  innerRadius: number;
  /** The outer radius of the band in kilometers. */
  outerRadius: number;
  /** An optional type identifier for the band (e.g., 'main', 'gossamer'). */
  type?: string;
}

/**
 * Defines a bright, clumpy arc within a planet's ring system (e.g., Neptune's rings).
 */
export interface RingArc {
  /** The inner radius of the arc in kilometers. */
  innerRadius: number;
  /** The outer radius of the arc in kilometers. */
  outerRadius: number;
  /** The start angle of the arc in radians. */
  thetaStart: number;
  /** The angular length of the arc in radians. */
  thetaLength: number;
}

/**
 * Defines the complete ring system for a planet.
 */
export interface Rings {
  /** A string identifier for the type of ring system (e.g., 'saturn', 'jupiter'). */
  type: string;
  /** The base color of the rings. */
  color: number | string;
  /** An array of `RingBand` objects that make up the system. */
  bands: RingBand[];
  /** An optional path to a texture file for the rings. */
  texture?: string;
  /** An optional array of `RingArc` objects for planets with ring arcs. */
  arcs?: RingArc[];
}

/**
 * The main interface for all celestial bodies in the simulation.
 * It contains physical properties, orbital parameters, and optional data for rings and educational content.
 */
export interface CelestialBody {
  /** A unique string identifier for the body (e.g., 'earth', 'moon'). */
  id: string;
  /** The ID of the parent body this object orbits, or `null` for the central star. */
  parentId: string | null;
  /** The display name of the body (e.g., 'Earth'). */
  name: string;
  /** The equatorial radius of the body in kilometers. */
  radius: number;
  /** The mass of the body in 10^24 kilograms. */
  mass?: number;
  /** The average surface gravity in m/s². */
  surfaceGravity?: number;
  /** The average density in kg/m³. */
  density?: number;
  /** The orbital inclination in degrees, relative to the ecliptic plane. */
  inclination?: number;
  /** A hex color code for UI elements and simple representations. */
  color: number;
  /** The semi-major axis of the orbit in Astronomical Units (AU). For moons, this is often 0 as `semiMajorAxisKm` is used instead. */
  semiMajorAxis: number;
  /** The orbital period (sidereal period) in Earth days. */
  orbitalPeriod: number;
  /** The eccentricity of the orbit (0 is a perfect circle). */
  eccentricity: number;
  /** An optional path to a texture file for the body's surface. */
  texture?: string;
  /** An optional `Rings` object describing the body's ring system. */
  rings?: Rings;
  /** The axial tilt of the body in degrees. */
  axialTilt?: number;
  /** The semi-major axis of a moon's orbit in kilometers. */
  semiMajorAxisKm?: number;

  /** Optional high-precision orbital elements for more accurate calculations. */
  orbitalElements?: OrbitalElements;
  /** Optional educational content for display in the UI. */
  edu?: EduContent;

  // --- Runtime properties, not part of the static data ---
  /** A runtime reference to the `THREE.Group` for this body. @internal */
  group?: THREE.Group;
  /** A runtime reference to the `THREE.Object3D` (Mesh/LOD) for this body. @internal */
  mesh?: THREE.Object3D;
  /** A runtime reference to the `THREE.Line` object representing the static orbit path. @internal */
  orbit?: THREE.Line;
}

/**
 * The master array containing all static data for every celestial body in the simulation.
 * This is the primary source of truth for the physical and orbital properties of planets, moons, and the sun.
 */
export const celestialBodyData: CelestialBody[] = [
    { id: 'sun', parentId: null, name: 'Sun', radius: 696340, mass: 1988500, density: 1408, surfaceGravity: 274, color: 0xffff00, semiMajorAxis: 0, orbitalPeriod: 1, eccentricity: 0, texture: null,
        edu: {
            shortDescription: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Sun"
        }
    },
    { id: 'mercury', parentId: 'sun', name: 'Mercury', radius: 2440, mass: 0.33011, density: 5427, surfaceGravity: 3.7, inclination: 7.005, color: 0x888888, semiMajorAxis: 0.387, orbitalPeriod: 88.0, eccentricity: 0.206, texture: 'assets/8k_mercury.jpg',
        edu: {
            shortDescription: "Mercury is the smallest planet in the Solar System and closest to the Sun. Its orbit takes 88 Earth days, the shortest of all the Sun's planets.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)"
        }
    },
    { id: 'venus', parentId: 'sun', name: 'Venus', radius: 6052, mass: 4.8675, density: 5243, surfaceGravity: 8.87, inclination: 3.39, color: 0xeeeeaa, semiMajorAxis: 0.723, orbitalPeriod: 224.7, eccentricity: 0.007, texture: 'assets/4k_venus_atmosphere.jpg',
        edu: {
            shortDescription: "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Venus"
        }
    },
    {
        id: 'earth',
        parentId: 'sun',
        name: 'Earth',
        radius: 6371,
        mass: 5.97237,
        density: 5514,
        surfaceGravity: 9.807,
        inclination: 0,
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
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg",
            readMoreUrl: 'https://en.wikipedia.org/wiki/Earth',
            sourceName: 'Wikipedia',
            license: 'CC BY-SA 3.0'
        }
    },
    { id: 'mars', parentId: 'sun', name: 'Mars', radius: 3390, mass: 0.64171, density: 3933, surfaceGravity: 3.721, inclination: 1.850, color: 0xff0000, semiMajorAxis: 1.524, orbitalPeriod: 687.0, eccentricity: 0.093, texture: 'assets/8k_mars.jpg',
        edu: {
            shortDescription: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Mars"
        }
    },
    { id: 'jupiter', parentId: 'sun', name: 'Jupiter', radius: 69911, mass: 1898.19, density: 1326, surfaceGravity: 24.79, inclination: 1.305, color: 0xffd8ad, semiMajorAxis: 5.204, orbitalPeriod: 4331, axialTilt: 3.08, eccentricity: 0.048, texture: 'assets/2k_jupiter.jpg',
        rings: { type: 'jupiter', color: 0x9B8B80, bands: [ { innerRadius: 92000, outerRadius: 122500, type: 'halo' }, { innerRadius: 122500, outerRadius: 129000, type: 'main' }, { innerRadius: 129000, outerRadius: 182000, type: 'gossamer' }, { innerRadius: 129000, outerRadius: 226000, type: 'gossamer' } ] },
        edu: {
            shortDescription: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/600px-Jupiter_New_Horizons.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Jupiter"
        }
    },
    { id: 'saturn', parentId: 'sun', name: 'Saturn', radius: 58232, mass: 568.34, density: 687, surfaceGravity: 10.44, inclination: 2.485, color: 0xf0e5c8, semiMajorAxis: 9.582, orbitalPeriod: 10747, axialTilt: 26.73, eccentricity: 0.054, texture: 'assets/8k_saturn.jpg',
        rings: { type: 'saturn', texture: 'assets/8k_saturn_ring_alpha.jpg', color: 0xFFFEEA, bands: [ { innerRadius: 74658, outerRadius: 92000 }, { innerRadius: 92000, outerRadius: 117580 }, { innerRadius: 122170, outerRadius: 136775 } ] },
        edu: {
            shortDescription: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Saturn"
        }
    },
    { id: 'uranus', parentId: 'sun', name: 'Uranus', radius: 25362, mass: 86.813, density: 1270, surfaceGravity: 8.69, inclination: 0.772, color: 0xAFDBF5, semiMajorAxis: 19.229, orbitalPeriod: 30589, axialTilt: 97.92, eccentricity: 0.047, texture: 'assets/2k_uranus.jpg',
        rings: { type: 'uranus', color: 0x36454F, bands: [ { innerRadius: 41836, outerRadius: 41838 }, { innerRadius: 42233, outerRadius: 42236 }, { innerRadius: 42568, outerRadius: 42572 }, { innerRadius: 44714, outerRadius: 44722 }, { innerRadius: 45657, outerRadius: 45665 }, { innerRadius: 47174, outerRadius: 47176 }, { innerRadius: 47625, outerRadius: 47629 }, { innerRadius: 48297, outerRadius: 48303 }, { innerRadius: 51120, outerRadius: 51178 } ] },
        edu: {
            shortDescription: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Uranus"
        }
    },
    { id: 'neptune', parentId: 'sun', name: 'Neptune', radius: 24622, mass: 102.413, density: 1638, surfaceGravity: 11.15, inclination: 1.769, color: 0x3d5ef5, semiMajorAxis: 30.109, orbitalPeriod: 59800, axialTilt: 29.6, eccentricity: 0.009, texture: 'assets/2k_neptune.jpg',
        rings: { type: 'neptune', color: 0x607B8B, bands: [ { innerRadius: 40900, outerRadius: 42900 }, { innerRadius: 53143, outerRadius: 53257 }, { innerRadius: 53200, outerRadius: 57200 }, { innerRadius: 62914, outerRadius: 62950 } ], arcs: [ { innerRadius: 62914, outerRadius: 62950, thetaStart: (247 * Math.PI / 180), thetaLength: (10 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (261 * Math.PI / 180), thetaLength: (3 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (265 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (276 * Math.PI / 180), thetaLength: (4 * Math.PI / 180) }, { innerRadius: 62914, outerRadius: 62950, thetaStart: (284.5 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) } ] },
        edu: {
            shortDescription: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Neptune"
        }
    },

    // Moons
    { id: 'moon', parentId: 'earth', name: 'Moon', radius: 1737, mass: 0.07346, density: 3344, surfaceGravity: 1.62, inclination: 5.145, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 384400, orbitalPeriod: 27.3, eccentricity: 0.0549, texture: null,
        edu: {
            shortDescription: "The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest and most massive relative to its parent planet.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/600px-FullMoon2010.jpg",
            readMoreUrl: "https://en.wikipedia.org/wiki/Moon"
        }
    },
    { id: 'io', parentId: 'jupiter', name: 'Io', radius: 1821, color: 0xE5C851, semiMajorAxis: 0, semiMajorAxisKm: 421600, orbitalPeriod: 1.77, eccentricity: 0.0041, texture: null },
    { id: 'europa', parentId: 'jupiter', name: 'Europa', radius: 1560, color: 0x8B7D82, semiMajorAxis: 0, semiMajorAxisKm: 670900, orbitalPeriod: 3.55, eccentricity: 0.009, texture: null },
    { id: 'ganymede', parentId: 'jupiter', name: 'Ganymede', radius: 2634, color: 0x9E978E, semiMajorAxis: 0, semiMajorAxisKm: 1070000, orbitalPeriod: 7.15, eccentricity: 0.0013, texture: null },
    { id: 'callisto', parentId: 'jupiter', name: 'Callisto', radius: 2410, color: 0x5C5C5C, semiMajorAxis: 0, semiMajorAxisKm: 1883000, orbitalPeriod: 16.69, eccentricity: 0.0074, texture: null },
    { id: 'mimas', parentId: 'saturn', name: 'Mimas', radius: 198, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 185539, orbitalPeriod: 0.94, eccentricity: 0.0196, texture: null },
    { id: 'enceladus', parentId: 'saturn', name: 'Enceladus', radius: 250, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 238042, orbitalPeriod: 1.4, eccentricity: 0.0047, texture: null },
    { id: 'titan', parentId: 'saturn', name: 'Titan', radius: 2575, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 1221865, orbitalPeriod: 16, eccentricity: 0.0288, texture: null },
    { id: 'iapetus', parentId: 'saturn', name: 'Iapetus', radius: 718, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 3560854, orbitalPeriod: 79.33, eccentricity: 0.0283, texture: null },
    { id: 'miranda', parentId: 'uranus', name: 'Miranda', radius: 236, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 129846, orbitalPeriod: 1.413, eccentricity: 0.0013, texture: null },
    { id: 'ariel', parentId: 'uranus', name: 'Ariel', radius: 579, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 190929, orbitalPeriod: 2.520, eccentricity: 0.0012, texture: null },
    { id: 'umbriel', parentId: 'uranus', name: 'Umbriel', radius: 585, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 265986, orbitalPeriod: 4.144, eccentricity: 0.0039, texture: null },
    { id: 'titania', parentId: 'uranus', name: 'Titania', radius: 789, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 436298, orbitalPeriod: 8.706, eccentricity: 0.0011, texture: null },
    { id: 'proteus', parentId: 'neptune', name: 'Proteus', radius: 209, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 117600, orbitalPeriod: 1.122, eccentricity: 0.0005, texture: null },
    { id: 'triton', parentId: 'neptune', name: 'Triton', radius: 1350, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 354760, orbitalPeriod: -5.877, eccentricity: 0.000016, texture: null },
    { id: 'nereid', parentId: 'neptune', name: 'Nereid', radius: 170, color: 0xcccccc, semiMajorAxis: 0, semiMajorAxisKm: 5513400, orbitalPeriod: 360.13, eccentricity: 0.7507, texture: null },
];
