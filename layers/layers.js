var wms_layers = [];


        var lyr_Googleearth_0 = new ol.layer.Tile({
            'title': 'Google earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Penggunaan_Lahan_1 = new ol.format.GeoJSON();
var features_Penggunaan_Lahan_1 = format_Penggunaan_Lahan_1.readFeatures(json_Penggunaan_Lahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penggunaan_Lahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penggunaan_Lahan_1.addFeatures(features_Penggunaan_Lahan_1);
var lyr_Penggunaan_Lahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Penggunaan_Lahan_1, 
                style: style_Penggunaan_Lahan_1,
                interactive: true,
    title: 'Penggunaan_Lahan<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_0.png" /> Danau/Situ<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_1.png" /> Hutan Rimba<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_2.png" /> Jalan<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_3.png" /> Pasir/Bukit Pasir Darat<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_4.png" /> Perkebunan/Kebun<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_5.png" /> Permukiman dan Tempat Kegiatan<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_6.png" /> Rawa<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_7.png" /> Semak Belukar<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_8.png" /> Sungai<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_9.png" /> Tanah Kosong/Gundul<br />\
    <img src="styles/legend/Penggunaan_Lahan_1_10.png" /> Tegalan/Ladang<br />'
        });
var format_BatasDesa_2 = new ol.format.GeoJSON();
var features_BatasDesa_2 = format_BatasDesa_2.readFeatures(json_BatasDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_2.addFeatures(features_BatasDesa_2);
var lyr_BatasDesa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesa_2, 
                style: style_BatasDesa_2,
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_2.png" /> Batas Desa'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });

lyr_Googleearth_0.setVisible(true);lyr_Penggunaan_Lahan_1.setVisible(true);lyr_BatasDesa_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);
var layersList = [lyr_Googleearth_0,lyr_Penggunaan_Lahan_1,lyr_BatasDesa_2,lyr_BatasKecamatan_3];
lyr_Penggunaan_Lahan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Luas_Ha': 'Luas_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BatasDesa_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BatasKecamatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Penggunaan_Lahan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasDesa_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Penggunaan_Lahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'inline label', 'Luas_Ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasDesa_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'inline label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKecamatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});