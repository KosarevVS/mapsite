var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_boundarypolygon_1 = new ol.format.GeoJSON();
var features_boundarypolygon_1 = format_boundarypolygon_1.readFeatures(json_boundarypolygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundarypolygon_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_boundarypolygon_1.addFeatures(features_boundarypolygon_1);var lyr_boundarypolygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundarypolygon_1, 
                style: style_boundarypolygon_1,
                title: '<img src="styles/legend/boundarypolygon_1.png" /> boundary-polygon'
            });var format_power_line_volgograd_2 = new ol.format.GeoJSON();
var features_power_line_volgograd_2 = format_power_line_volgograd_2.readFeatures(json_power_line_volgograd_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_power_line_volgograd_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_power_line_volgograd_2.addFeatures(features_power_line_volgograd_2);var lyr_power_line_volgograd_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_power_line_volgograd_2, 
                style: style_power_line_volgograd_2,
                title: '<img src="styles/legend/power_line_volgograd_2.png" /> power_line_volgograd'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_boundarypolygon_1.setVisible(true);lyr_power_line_volgograd_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_boundarypolygon_1,lyr_power_line_volgograd_2];
lyr_boundarypolygon_1.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'NAME', 'ADMIN_LVL': 'ADMIN_LVL', });
lyr_power_line_volgograd_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'voltage': 'voltage', 'cables': 'cables', 'circuits': 'circuits', 'frequency': 'frequency', 'wires': 'wires', 'branch': 'branch', 'layer': 'layer', 'operator': 'operator', 'conductors': 'conductors', 'descriptio': 'descriptio', 'info': 'info', 'name': 'name', 'shielding': 'shielding', 'circuits_d': 'circuits_d', 'fimxe': 'fimxe', 'voltage_de': 'voltage_de', 'disused': 'disused', 'voltage_re': 'voltage_re', 'length': 'length', });
lyr_boundarypolygon_1.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME': 'TextEdit', 'ADMIN_LVL': 'TextEdit', });
lyr_power_line_volgograd_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'voltage': '', 'cables': '', 'circuits': '', 'frequency': '', 'wires': '', 'branch': '', 'layer': '', 'operator': '', 'conductors': '', 'descriptio': '', 'info': '', 'name': '', 'shielding': '', 'circuits_d': '', 'fimxe': '', 'voltage_de': '', 'disused': '', 'voltage_re': '', 'length': '', });
lyr_boundarypolygon_1.set('fieldLabels', {'OSM_ID': 'no label', 'NAME': 'no label', 'ADMIN_LVL': 'no label', });
lyr_power_line_volgograd_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'voltage': 'no label', 'cables': 'no label', 'circuits': 'no label', 'frequency': 'no label', 'wires': 'no label', 'branch': 'no label', 'layer': 'no label', 'operator': 'no label', 'conductors': 'no label', 'descriptio': 'no label', 'info': 'no label', 'name': 'no label', 'shielding': 'no label', 'circuits_d': 'no label', 'fimxe': 'no label', 'voltage_de': 'no label', 'disused': 'no label', 'voltage_re': 'no label', 'length': 'no label', });
lyr_power_line_volgograd_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});