<script>
    import { onMount } from 'svelte';
  
    export let lat = 25.3831;
    export let lon = 49.5864;
  
    let map;
    let marker;
  
    onMount(async () => {
      const L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');
  
      map = L.map('map').setView([lat, lon], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);
  
      marker = L.marker([lat, lon], { draggable: true }).addTo(map);
  
      marker.on('dragend', () => {
        const pos = marker.getLatLng();
        lat = pos.lat;
        lon = pos.lng;
      });
    });
  </script>
  
  <h2 class="text-2xl font-semibold mb-4">اختر موقع التوصيل📍</h2>
  <div id="map" class="w-full h-96 rounded-xl border shadow"></div>
  
  <style>
    #map {
      height: 100%;
      width: 100%;
    }
  </style>
  