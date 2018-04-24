var map = L.map("map");
		var countriesLayer=L.geojson(countries).addTo(map);
		L.tileLayer.wms ("http://localhost:33333/geoserver/gph", {layers:"ne_110m_admin_0_countries"}).addTo(map);
		
 });
