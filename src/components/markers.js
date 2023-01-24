const markers = [
    {
        name: 'Adams',
        fullName: 'Adams Motorsports Park',
        location: 'Riverside, Ca',
        lat: 34.008655,
        lng: -117.381843,
        clubs: '2WTD mini racing'
    },
    {
        name: 'Affinity',
        fullName: 'Affinity Circuit',
        location: 'Central Point, Or',
        lat: 42.4169,
        lng: -122.8047,
        straight: 726,
        turns: 14,
        clubs: 'Cascadia Super Moto'
    },
    {
        name: 'Anderson',
        fullName:'Anderson RacePark',
        location: 'Palmetto, Fl',
        lat: 27.6059,
        lng: -82.5419,
        clubs: 'SFLminiGP'

    },
    {
        name: 'Apex',
        fullName: 'Apex Kart Racing',
        location: 'Perris, Ca',
        lat: 33.8538,
        lng: -117.2032,
        clubs: '2WTD mini racing'
    },
    {
        
        name: 'Bremerton',
        fullName: 'Bremerton SuperCone Course',
        location: 'Bremerton, Wa',
        lat: 47.492257,
        lng: -122.754693,
        clubs: 'Cascadia Super Moto'
    },
    {
        name: 'Bushnell',
        fullName: 'Bushnell Motorsports Park',
        location: 'Bushnell, Fl',
        lat: 28.671,
        lng: -82.149,
        clubs: 'SFLminiGP'
    },
    {
        name: 'Cariboo',
        fullName: 'Cariboo Raceway Park',
        location: 'Quesnel, Ca',
        lat: 52.9903,
        lng: -122.4418,
        straight: 457,
        turns: 11,
        clubs: 'Pacific Coast Mini Road Racing Club'
    },
    {
        name: 'CMP',
        fullName: 'Carolina Motorsports Park',
        location: 'Kewshaw, Sc',
        lat: 34.488,
        lng: -80.596,
        clubs: 'SFLminiGP'
    },
    {
        name: 'CNS',
        fullName: 'Colorado National Speedway',
        location: 'Dacono, Co',
        lat: 40.0619,
        lng: -104.9734,
        straight: 438,
        clubs: 'Colorado Super Moto'
    },
    {
        name: 'Gainesville',
        fullName: 'Gainesville Raceway',
        location: 'Gainesville, Fl',
        lat: 29.7574,
        lng: -82.2718,
        clubs: 'SFLminiGP'
        
    },
    {
        name: 'GMR',
        fullName: 'Greg Moore Raceway',
        location: 'British Columbia, Ca',
        lat: 49.1722,
        lng: -121.9778,
        straight: 662,
        turns: 17,
        clubs: 'Pacific Coast Mini Road Racing Club'
    },
    {
        name: 'GP3R',
        fullName: 'Grand Prix de Trois-Rivieres',
        location: 'Quebec, Canada',
        lat: 46.3456,
        lng: -72.5566,
        clubs: 'AMA SUPERMOTO'
    },
    {
        name: 'Junction',
        fullName: 'Grand Junction Motor Speedway',
        location: 'Grand Junction, Co',
        lat: 39.1084,
        lng: -109.4912,
        straight: 685,
        clubs: 'Colorado Super Moto'
    },
    {
        name: 'Herrin_Compound',
        fullName: 'the Herrin Compound',
        location: 'Dublin, Ga',
        lat: 32.4780,
        lng: -83.0291,
        straight: 281,
        turns: 13,
        clubs: 'SFLminiGP'
    },
    {
        name: 'NNKC',
        fullName: 'Desert Park Raceway',
        location: 'Reno, Nv',
        lat: 39.6810,
        lng: -119.8668,
        straight: 580,
        turns: 11,
        clubs: 'Shasta SuperMoto Club'
    },
    {
        name: 'NOLA',
        fullName: 'New Orleans Motorsports Karting',
        location: 'New Orleans, La',
        lat: 29.887,
        lng: -90.192
    },
    {
        name: 'Horse_Thief',
        fullName: 'Willow Springs International Raceway',
        location: 'Rosamond, Ca',
        lat: 34.8702,
        lng: -118.2662,
        straight: 819,
        turns: 8,
        clubs: '2WTD mini racing, AMA SUPERMOTO'
    },
    {
        name: 'IMI',
        fullName: 'IMI Motorsports Complex',
        location: 'Dacono, Co',
        lat: 40.043932,
        lng: -104.949296,
        clubs: 'Colorado Super Moto'
    },
    {
        name: 'Mac',
        fullName: 'Mac Track',
        location: 'McMinnville, Or',
        lat: 45.225621,
        lng: -123.170771,
        straight: 660,
        turns: 11,
        amenities: 'Full Hot Showers, Bathroom, Running water',
        clubs: 'NorthWest Mini Moto'
    },
    {
        name: 'Musselman',
        fullName: 'Musselman Honda Circuit',
        location: 'Pima County, Az',
        lat: 32.0359,
        lng: -110.7929,
        straight: 635,
        turns: 12,
        clubs: 'AMA SUPERMOTO'

    },
    {
        name: 'RA',
        fullName: 'Road America Motor Plex',
        location: 'Plymouth, Wi',
        lat: 43.7985,
        lng: -87.9987,
        straight: 461,
        turns: 12,
        clubs: 'AMA SUPERMOTO'
    },
    {
        name: 'Shasta',
        fullName: 'Shasta Kart Klub',
        location: 'Redding, Ca',
        lat: 40.504167,
        lng: -122.285629,
        straight: 932,
        turns: 13,
        amenities: 'Porta Potties',
        clubs: 'Shasta SuperMoto Club'
    },
    {
        name: 'SKRA',
        fullName: 'Spokane Kart Racing Association',
        location: 'Spokane, Wa',
        lat: 47.657778,
        lng: -117.591583,
        straight: 534,
        turns: 11,
        amenities: 'Bathroom, Limited Electrical Hookups',
        clubs: 'Cascadia Super Moto'
    },
    {
        name: 'SMKA',
        fullName: 'Santa Maria Kart Track',
        location: 'Santa Maria, Ca',
        lat: 34.8922,
        lng: -120.464655,
    },
    {
        name: 'Sultan',
        fullName: 'Streets of Sultan',
        location: 'Sultan, Wa',
        lat: 47.864050,
        lng: -121.796850,
        clubs: 'Cascadia Super Moto'
    },
    {   
        name: 'TCKC',
        fullName: 'Tri Cities Kart Club',
        location: 'Richland, Wa',
        lat: 46.349114,
        lng: -119.347580,
        straight: 608,
        turns: 12,
        amenities: 'Full Hot Showers, Bathrooms, Running Water, Many Electrical Hookups',
        clubs: 'Cascadia Super Moto, NorthWest Mini Moto'
    },
    { 
        name: 'UMC',
        fullName: 'Utah Motorsports Campus',
        location: 'Erda, Ut',
        lat: 40.584648,
        lng: -112.377699,
        straight: 974,
        turns: 17,
        clubs: 'UTAHSBA Super Moto'
    }

    
]

export default markers