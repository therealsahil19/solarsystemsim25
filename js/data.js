export const planetData = [
    { name: 'Sun', radius: 696340, color: 0xffff00, semiMajorAxis: 0, orbitalPeriod: 1 },
    { name: 'Mercury', radius: 2440, color: 0x888888, semiMajorAxis: 0.387, orbitalPeriod: 88.0 },
    { name: 'Venus', radius: 6052, color: 0xeeeeaa, semiMajorAxis: 0.723, orbitalPeriod: 224.7 },
    { name: 'Earth', radius: 6371, color: 0x0000ff, semiMajorAxis: 1.0, orbitalPeriod: 365.2, moons: [
        { name: 'Moon', radius: 1737, color: 0xcccccc, semiMajorAxis: 0.015, orbitalPeriod: 27.3, semiMajorAxisKm: 384400 }
    ]},
    { name: 'Mars', radius: 3390, color: 0xff0000, semiMajorAxis: 1.524, orbitalPeriod: 687.0 },
    { name: 'Jupiter', radius: 69911, color: 0xffd8ad, semiMajorAxis: 5.204, orbitalPeriod: 4331, axialTilt: 3.08,
        rings: {
            type: 'jupiter',
            color: 0x9B8B80, // Dark reddish
            bands: [
                { innerRadius: 92000, outerRadius: 122500, type: 'halo' },
                { innerRadius: 122500, outerRadius: 129000, type: 'main' },
                { innerRadius: 129000, outerRadius: 182000, type: 'gossamer' },
                { innerRadius: 129000, outerRadius: 226000, type: 'gossamer' }
            ]
        },
        moons: [
            { name: 'Io', radius: 1821, color: 0xE5C851, semiMajorAxis: 0.03, orbitalPeriod: 1.77, semiMajorAxisKm: 421600 },
            { name: 'Europa', radius: 1560, color: 0x8B7D82, semiMajorAxis: 0.04, orbitalPeriod: 3.55, semiMajorAxisKm: 670900 },
            { name: 'Ganymede', radius: 2634, color: 0x9E978E, semiMajorAxis: 0.05, orbitalPeriod: 7.15, semiMajorAxisKm: 1070000 },
            { name: 'Callisto', radius: 2410, color: 0x5C5C5C, semiMajorAxis: 0.06, orbitalPeriod: 16.69, semiMajorAxisKm: 1883000 },
    ]},
    { name: 'Saturn', radius: 58232, color: 0xf0e5c8, semiMajorAxis: 9.582, orbitalPeriod: 10747, axialTilt: 26.73,
        rings: {
            type: 'saturn',
            texture: 'assets/textures/saturn_rings.png',
            color: 0xFFFEEA,
            bands: [
                { innerRadius: 74658, outerRadius: 92000 },  // C Ring
                { innerRadius: 92000, outerRadius: 117580 }, // B Ring
                { innerRadius: 122170, outerRadius: 136775 } // A Ring
            ]
        },
        moons: [
            { name: 'Mimas', radius: 198, color: 0xcccccc, semiMajorAxis: 0.045, orbitalPeriod: 0.94, semiMajorAxisKm: 185539 },
            { name: 'Enceladus', radius: 250, color: 0xcccccc, semiMajorAxis: 0.055, orbitalPeriod: 1.4, semiMajorAxisKm: 238042 },
            { name: 'Titan', radius: 2575, color: 0xcccccc, semiMajorAxis: 0.1, orbitalPeriod: 16, semiMajorAxisKm: 1221865 },
            { name: 'Iapetus', radius: 718, color: 0xcccccc, semiMajorAxis: 0.2, orbitalPeriod: 79.33, semiMajorAxisKm: 3560854 },
    ] },
    { name: 'Uranus', radius: 25362, color: 0xAFDBF5, semiMajorAxis: 19.229, orbitalPeriod: 30589, axialTilt: 97.92,
        rings: {
            type: 'uranus',
            color: 0x36454F, // Charcoal gray
            bands: [
                { innerRadius: 41836, outerRadius: 41838 }, // Ring 6
                { innerRadius: 42233, outerRadius: 42236 }, // Ring 5
                { innerRadius: 42568, outerRadius: 42572 }, // Ring 4
                { innerRadius: 44714, outerRadius: 44722 }, // Alpha
                { innerRadius: 45657, outerRadius: 45665 }, // Beta
                { innerRadius: 47174, outerRadius: 47176 }, // Eta
                { innerRadius: 47625, outerRadius: 47629 }, // Gamma
                { innerRadius: 48297, outerRadius: 48303 }, // Delta
                { innerRadius: 51120, outerRadius: 51178 }  // Epsilon
            ]
        },
        moons: [
            { name: 'Miranda', radius: 236, color: 0xcccccc, semiMajorAxis: 0.02, orbitalPeriod: 1.413, semiMajorAxisKm: 129846 },
            { name: 'Ariel', radius: 579, color: 0xcccccc, semiMajorAxis: 0.03, orbitalPeriod: 2.520, semiMajorAxisKm: 190929 },
            { name: 'Umbriel', radius: 585, color: 0xcccccc, semiMajorAxis: 0.04, orbitalPeriod: 4.144, semiMajorAxisKm: 265986 },
            { name: 'Titania', radius: 789, color: 0xcccccc, semiMajorAxis: 0.05, orbitalPeriod: 8.706, semiMajorAxisKm: 436298 },
    ] },
    { name: 'Neptune', radius: 24622, color: 0x3d5ef5, semiMajorAxis: 30.109, orbitalPeriod: 59800, axialTilt: 29.6,
        rings: {
            type: 'neptune',
            color: 0x607B8B, // Bluish tint
            bands: [
                { innerRadius: 40900, outerRadius: 42900 },   // Galle
                { innerRadius: 53143, outerRadius: 53257 },  // Le Verrier
                { innerRadius: 53200, outerRadius: 57200 },   // Lassell
                { innerRadius: 62914, outerRadius: 62950 }    // Adams
            ],
            arcs: [
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (247 * Math.PI / 180), thetaLength: (10 * Math.PI / 180) }, // Fraternité
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (261 * Math.PI / 180), thetaLength: (3 * Math.PI / 180) },  // Égalité 1
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (265 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) },  // Égalité 2
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (276 * Math.PI / 180), thetaLength: (4 * Math.PI / 180) },  // Liberté
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (284.5 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) }, // Courage
            ]
        },
        moons: [
            { name: 'Proteus', radius: 209, color: 0xcccccc, semiMajorAxis: 0.03, orbitalPeriod: 1.122, semiMajorAxisKm: 117600 },
            { name: 'Triton', radius: 1350, color: 0xcccccc, semiMajorAxis: 0.04, orbitalPeriod: -5.877, semiMajorAxisKm: 354760 },
            { name: 'Nereid', radius: 170, color: 0xcccccc, semiMajorAxis: 0.2, orbitalPeriod: 360.13, semiMajorAxisKm: 5513400 },
    ] },
];
