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

    {
      name: "Historische Karte",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/Historische_Karte.jpg",
      world: {
        file: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/Historische_Karte.jgw",
        proj: "UTM",
        zone: 32,
        band: "N",
      },
      options: {
        age: 1879,
      },
    },
    {
      // ETRS89 / UTM 32N
      name: "OpenStreetMap",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/OSM.jpg",
      world: {
        file: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/OSM.jgw",
        proj: "UTM",
        zone: 32,
        band: "N",
      },
      options: {
        age: 2025,
      },
    },

    {
      // ETRS89 / UTM 32N
      name: "TK25 2023",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/TK.jpg",
      world: {
        file: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/TK.jgw",
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
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/maps/OSM.pmtiles",
      name: "OpenStreetMap 03/2025",
      options: {
        age: 2024,
      },
    },
  ],
  /* GeoJSON overlays */
  geojson: [
    {
      name: "Touristenroute",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/overlays/Touristenroute.geojson",
      options: {
        age: 1,
      },
    },

    {
      name: "Vogels Rheinpanorama",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/overlays/Infopunkte.geojson",
      options: {
        age: 3,
      },
    },

    {
      name: "Drohnen Panoramas",
      url: "https://markprys.github.io/Mittelrhein-Tourismus/data/overlays/posDrohnen.geojson",
      options: {
        age: 5,
      }
    }

  ],
};

fetch('data/maps/OSM.pmtiles', { method: 'HEAD' })
  .then(res => console.log("HEAD response", res))
  .catch(err => console.error("HEAD error", err));
