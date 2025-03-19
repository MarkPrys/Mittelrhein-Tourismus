/************************************************************ -*- JavaScript -*-
 *
 * (c) 2024 movisda GmbH
 *
 * movisda GmbH
 * Rosenstr. 2
 * 10178 Berlin
 * Germany
 *
 * email:   dev@movisda.io
 * web:     https://movisda.io
 *
 * The software and documentation contained herein are proprietary to and
 * comprise valuable trade secrets of movisda GmbH which intends to preserve.
 *
 * This software may not be used, copied, transmitted, stored, modified,
 * distributed or sold without a written license agreement. This software and
 * information or any other copies thereof may not be made available to any
 * other person.
 *
 ******************************************************************************/

const LAYERS = {
  /* base maps as image */
  images: [
    // {
    //   name: "Tranchot - v. Müffling 1803-1820",
    //   url: "data/maps/tranchot.png",
    //   bounds: [
    //     [50.29068795494675, 7.6328987132876716],
    //     [50.321764254593674, 7.705471469491065],
    //   ],
    //   options: {
    //     age: 1820,
    //   },
    // },
    {
      name: "Historische Karte",
      url: "data/maps/Historische Karte.jpg",
      world: {
        file: "data/maps/Historische Karte.jgw",
        proj: "UTM",
        zone: 32,
        band: "N",
      },
      options: {
        age: 1879,
      },
    },
    // {
    //   name: "Preuß. Neuaufnahme 1902",
    //   url: "data/maps/preuss1902.png",
    //   bounds: [
    //     [50.294518434946525, 7.642596372689379],
    //     [50.31635902439836, 7.693803309016072],
    //   ],
    //   options: {
    //     age: 1902,
    //   },
    // },
    {
      // ETRS89 / UTM 32N
      name: "TK25 2023",
      url: "data/maps/TK.jpg",
      world: {
        file: "data/maps/TK.jgw",
        proj: "UTM",
        zone: 32,
        band: "N",
      },
      options: {
        age: 2023,
      },
    },
  ],
  /* OSM Rasterkarten */
  pmtiles: [
    {
      name: "OpenStreetMap 03/2025",
      url: "data/maps/OSM.pmtiles",
      options: {
        age: 2024,
      },
    },
  ],
  /* GeoJSON overlays */
  geojson: [
    {
      name: "Touristenroute",
      url: "data/overlays/Touristenroute.geojson",
      options: {
        age: 1,
      },
    },

    {
      name: "Vogels Rheinpanorama",
      url: "data/overlays/Infopunkte.geojson",
      options: {
        age: 3,
      },
    },

    {
      name: "Drohnen Panoramas",
      url: "data/overlays/posDrohnen.geojson",
      options: {
        age: 5,
      }
    }
    // {
    //   name: "Panorama",
    //   url: "data/overlays/pano.geojson",
    //   options: {
    //     age: 4,
    //   },
    // },
  ],
};
