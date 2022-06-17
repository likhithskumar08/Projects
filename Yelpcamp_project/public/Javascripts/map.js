mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: campground.geometry.coordinates,
  zoom: 3,
});

map.addControl(new mapboxgl.NavigationControl());

console.log(campground.geometry.coordinates);
const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat(campground.geometry.coordinates)
  .setHTML(
    `<style='font-size:36px'></i><h3>${campground.title}</h3><p>${campground.location}</p>`
  )

  .addTo(map);
