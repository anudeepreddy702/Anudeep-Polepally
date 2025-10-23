import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

function TravelMap() {
  const visitedPlaces = [
    { name: "New York", coordinates: [-74.006, 40.7128], visited: true },
    { name: "New Delhi", coordinates: [77.209, 28.6139], visited: false },
    { name: "Amsterdam", coordinates: [4.9041, 52.3676], visited: false }
  ];

  return (
    <div className="travel-map">
      <h2>My Travel Map</h2>
      <ComposableMap>
        <Geographies geography="/world-map.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {visitedPlaces.map(({ name, coordinates, visited }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={6} fill={visited ? "#F47600" : "#999"} />
            <text textAnchor="middle" y={-10}>{name}</text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default TravelMap