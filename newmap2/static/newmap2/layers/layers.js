var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_csv_test_1 = new ol.format.GeoJSON();
var features_csv_test_1 = format_csv_test_1.readFeatures(json_csv_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csv_test_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_csv_test_1.addFeatures(features_csv_test_1);var lyr_csv_test_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csv_test_1, 
                style: style_csv_test_1,
                title: '<img src="styles/legend/csv_test_1.png" /> csv_test'
            });var format_voltage_sh_750_2 = new ol.format.GeoJSON();
var features_voltage_sh_750_2 = format_voltage_sh_750_2.readFeatures(json_voltage_sh_750_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_750_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_750_2.addFeatures(features_voltage_sh_750_2);var lyr_voltage_sh_750_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_750_2, 
                style: style_voltage_sh_750_2,
                title: '<img src="styles/legend/voltage_sh_750_2.png" /> voltage_sh_750'
            });var format_voltage_sh_500_3 = new ol.format.GeoJSON();
var features_voltage_sh_500_3 = format_voltage_sh_500_3.readFeatures(json_voltage_sh_500_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_500_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_500_3.addFeatures(features_voltage_sh_500_3);var lyr_voltage_sh_500_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_500_3, 
                style: style_voltage_sh_500_3,
                title: '<img src="styles/legend/voltage_sh_500_3.png" /> voltage_sh_500'
            });var format_voltage_sh_400_4 = new ol.format.GeoJSON();
var features_voltage_sh_400_4 = format_voltage_sh_400_4.readFeatures(json_voltage_sh_400_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_400_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_400_4.addFeatures(features_voltage_sh_400_4);var lyr_voltage_sh_400_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_400_4, 
                style: style_voltage_sh_400_4,
                title: '<img src="styles/legend/voltage_sh_400_4.png" /> voltage_sh_400'
            });var format_voltage_sh_380_5 = new ol.format.GeoJSON();
var features_voltage_sh_380_5 = format_voltage_sh_380_5.readFeatures(json_voltage_sh_380_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_380_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_380_5.addFeatures(features_voltage_sh_380_5);var lyr_voltage_sh_380_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_380_5, 
                style: style_voltage_sh_380_5,
                title: '<img src="styles/legend/voltage_sh_380_5.png" /> voltage_sh_380'
            });var format_voltage_sh_350_6 = new ol.format.GeoJSON();
var features_voltage_sh_350_6 = format_voltage_sh_350_6.readFeatures(json_voltage_sh_350_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_350_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_350_6.addFeatures(features_voltage_sh_350_6);var lyr_voltage_sh_350_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_350_6, 
                style: style_voltage_sh_350_6,
                title: '<img src="styles/legend/voltage_sh_350_6.png" /> voltage_sh_350'
            });var format_voltage_sh_330_7 = new ol.format.GeoJSON();
var features_voltage_sh_330_7 = format_voltage_sh_330_7.readFeatures(json_voltage_sh_330_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_330_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_330_7.addFeatures(features_voltage_sh_330_7);var lyr_voltage_sh_330_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_330_7, 
                style: style_voltage_sh_330_7,
                title: '<img src="styles/legend/voltage_sh_330_7.png" /> voltage_sh_330'
            });var format_voltage_sh_220_8 = new ol.format.GeoJSON();
var features_voltage_sh_220_8 = format_voltage_sh_220_8.readFeatures(json_voltage_sh_220_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_220_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_220_8.addFeatures(features_voltage_sh_220_8);var lyr_voltage_sh_220_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_220_8, 
                style: style_voltage_sh_220_8,
                title: '<img src="styles/legend/voltage_sh_220_8.png" /> voltage_sh_220'
            });var format_voltage_sh_154_9 = new ol.format.GeoJSON();
var features_voltage_sh_154_9 = format_voltage_sh_154_9.readFeatures(json_voltage_sh_154_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_154_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_154_9.addFeatures(features_voltage_sh_154_9);var lyr_voltage_sh_154_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_154_9, 
                style: style_voltage_sh_154_9,
                title: '<img src="styles/legend/voltage_sh_154_9.png" /> voltage_sh_154'
            });var format_voltage_sh_150_10 = new ol.format.GeoJSON();
var features_voltage_sh_150_10 = format_voltage_sh_150_10.readFeatures(json_voltage_sh_150_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_150_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_150_10.addFeatures(features_voltage_sh_150_10);var lyr_voltage_sh_150_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_150_10, 
                style: style_voltage_sh_150_10,
                title: '<img src="styles/legend/voltage_sh_150_10.png" /> voltage_sh_150'
            });var format_voltage_sh_138_11 = new ol.format.GeoJSON();
var features_voltage_sh_138_11 = format_voltage_sh_138_11.readFeatures(json_voltage_sh_138_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_138_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_138_11.addFeatures(features_voltage_sh_138_11);var lyr_voltage_sh_138_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_138_11, 
                style: style_voltage_sh_138_11,
                title: '<img src="styles/legend/voltage_sh_138_11.png" /> voltage_sh_138'
            });var format_voltage_sh_110_12 = new ol.format.GeoJSON();
var features_voltage_sh_110_12 = format_voltage_sh_110_12.readFeatures(json_voltage_sh_110_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_110_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_110_12.addFeatures(features_voltage_sh_110_12);var lyr_voltage_sh_110_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_110_12, 
                style: style_voltage_sh_110_12,
                title: '<img src="styles/legend/voltage_sh_110_12.png" /> voltage_sh_110'
            });var format_voltage_sh_100_13 = new ol.format.GeoJSON();
var features_voltage_sh_100_13 = format_voltage_sh_100_13.readFeatures(json_voltage_sh_100_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voltage_sh_100_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voltage_sh_100_13.addFeatures(features_voltage_sh_100_13);var lyr_voltage_sh_100_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voltage_sh_100_13, 
                style: style_voltage_sh_100_13,
                title: '<img src="styles/legend/voltage_sh_100_13.png" /> voltage_sh_100'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_csv_test_1.setVisible(true);lyr_voltage_sh_750_2.setVisible(true);lyr_voltage_sh_500_3.setVisible(true);lyr_voltage_sh_400_4.setVisible(true);lyr_voltage_sh_380_5.setVisible(true);lyr_voltage_sh_350_6.setVisible(true);lyr_voltage_sh_330_7.setVisible(true);lyr_voltage_sh_220_8.setVisible(true);lyr_voltage_sh_154_9.setVisible(true);lyr_voltage_sh_150_10.setVisible(true);lyr_voltage_sh_138_11.setVisible(true);lyr_voltage_sh_110_12.setVisible(true);lyr_voltage_sh_100_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_csv_test_1,lyr_voltage_sh_750_2,lyr_voltage_sh_500_3,lyr_voltage_sh_400_4,lyr_voltage_sh_380_5,lyr_voltage_sh_350_6,lyr_voltage_sh_330_7,lyr_voltage_sh_220_8,lyr_voltage_sh_154_9,lyr_voltage_sh_150_10,lyr_voltage_sh_138_11,lyr_voltage_sh_110_12,lyr_voltage_sh_100_13];
lyr_csv_test_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'status': 'status', 'capasity': 'capasity', 'x': 'x', 'y': 'y', });
lyr_voltage_sh_750_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_500_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_400_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_380_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_350_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_330_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_220_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_154_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_150_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_138_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_110_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_voltage_sh_100_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'cables': 'cables', 'circuits': 'circuits', 'voltage': 'voltage', 'wires': 'wires', 'ref': 'ref', 'branch': 'branch', 'name': 'name', 'operator': 'operator', 'frequency': 'frequency', 'line': 'line', 'material': 'material', 'lines': 'lines', 'info': 'info', 'cab': 'cab', 'path': 'path', 'voltage_my': 'voltage_my', 'voltage_sh': 'voltage_sh', });
lyr_csv_test_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'capasity': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_voltage_sh_750_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_500_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_400_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_380_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_350_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_330_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_220_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_154_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_150_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_138_11.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_110_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_voltage_sh_100_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'cables': '', 'circuits': '', 'voltage': '', 'wires': '', 'ref': '', 'branch': '', 'name': '', 'operator': '', 'frequency': '', 'line': '', 'material': '', 'lines': '', 'info': '', 'cab': '', 'path': '', 'voltage_my': '', 'voltage_sh': '', });
lyr_csv_test_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'status': 'no label', 'capasity': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_voltage_sh_750_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_500_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_400_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_380_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_350_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_330_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_220_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_154_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_150_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_138_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_110_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_100_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'cables': 'no label', 'circuits': 'no label', 'voltage': 'no label', 'wires': 'no label', 'ref': 'no label', 'branch': 'no label', 'name': 'no label', 'operator': 'no label', 'frequency': 'no label', 'line': 'no label', 'material': 'no label', 'lines': 'no label', 'info': 'no label', 'cab': 'no label', 'path': 'no label', 'voltage_my': 'no label', 'voltage_sh': 'no label', });
lyr_voltage_sh_100_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});