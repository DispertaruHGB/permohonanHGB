var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_HGB_2020_2025_1 = new ol.format.GeoJSON();
var features_HGB_2020_2025_1 = format_HGB_2020_2025_1.readFeatures(json_HGB_2020_2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGB_2020_2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGB_2020_2025_1.addFeatures(features_HGB_2020_2025_1);
var lyr_HGB_2020_2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGB_2020_2025_1, 
                style: style_HGB_2020_2025_1,
                popuplayertitle: 'HGB_2020_2025',
                interactive: true,
    title: 'HGB_2020_2025<br />\
    <img src="styles/legend/HGB_2020_2025_1_0.png" /> Belum Jelas<br />\
    <img src="styles/legend/HGB_2020_2025_1_1.png" /> Berkas Dikembalikan<br />\
    <img src="styles/legend/HGB_2020_2025_1_2.png" /> Bukan SG<br />\
    <img src="styles/legend/HGB_2020_2025_1_3.png" /> PAG<br />\
    <img src="styles/legend/HGB_2020_2025_1_4.png" /> Pengukuran Ulang<br />\
    <img src="styles/legend/HGB_2020_2025_1_5.png" /> Permohonan Dicabut<br />\
    <img src="styles/legend/HGB_2020_2025_1_6.png" /> SG<br />\
    <img src="styles/legend/HGB_2020_2025_1_7.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_HGB_2020_2025_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_HGB_2020_2025_1];
lyr_HGB_2020_2025_1.set('fieldAliases', {'Id': 'Id', 'No. Arsip': 'No. Arsip', 'No. Urut': 'No. Urut', 'No. Surat': 'No. Surat', 'Tgl. Surat': 'Tgl. Surat', 'Pemohon': 'Pemohon', 'Uraian': 'Uraian', 'Jenis Hak': 'Jenis Hak', 'Nomor Hak': 'Nomor Hak', 'Kel/Kal': 'Kel/Kal', 'Kem/Kap': 'Kem/Kap', 'Kota/Kab': 'Kota/Kab', 'Berakhir H': 'Berakhir H', 'Dasar SK': 'Dasar SK', 'Penunjuk': 'Penunjuk', 'Tgl. Rapat': 'Tgl. Rapat', 'Asal-Usul': 'Asal-Usul', 'Kelompok': 'Kelompok', 'Tindak Lan': 'Tindak Lan', 'Plotting': 'Plotting', 'Tahun': 'Tahun', 'Status': 'Status', 'Tgl. Tangg': 'Tgl. Tangg', 'layer': 'layer', 'path': 'path', 'Tgl. Terim': 'Tgl. Terim', 'No. Telp': 'No. Telp', 'Jenis': 'Jenis', 'Progre Sur': 'Progre Sur', 'Status Sur': 'Status Sur', 'Penerima': 'Penerima', 'Tgl. Ambil': 'Tgl. Ambil', 'Koordinat': 'Koordinat', 'Progres Su': 'Progres Su', 'Field32': 'Field32', });
lyr_HGB_2020_2025_1.set('fieldImages', {'Id': 'TextEdit', 'No. Arsip': 'TextEdit', 'No. Urut': 'TextEdit', 'No. Surat': 'TextEdit', 'Tgl. Surat': 'TextEdit', 'Pemohon': 'TextEdit', 'Uraian': 'TextEdit', 'Jenis Hak': 'TextEdit', 'Nomor Hak': 'TextEdit', 'Kel/Kal': 'TextEdit', 'Kem/Kap': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Berakhir H': 'TextEdit', 'Dasar SK': 'TextEdit', 'Penunjuk': 'TextEdit', 'Tgl. Rapat': 'TextEdit', 'Asal-Usul': 'TextEdit', 'Kelompok': 'TextEdit', 'Tindak Lan': 'TextEdit', 'Plotting': 'TextEdit', 'Tahun': 'TextEdit', 'Status': 'TextEdit', 'Tgl. Tangg': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Tgl. Terim': 'TextEdit', 'No. Telp': 'TextEdit', 'Jenis': 'TextEdit', 'Progre Sur': 'TextEdit', 'Status Sur': 'TextEdit', 'Penerima': 'TextEdit', 'Tgl. Ambil': 'TextEdit', 'Koordinat': 'TextEdit', 'Progres Su': 'TextEdit', 'Field32': 'TextEdit', });
lyr_HGB_2020_2025_1.set('fieldLabels', {'Id': 'hidden field', 'No. Arsip': 'hidden field', 'No. Urut': 'hidden field', 'No. Surat': 'hidden field', 'Tgl. Surat': 'hidden field', 'Pemohon': 'inline label - visible with data', 'Uraian': 'hidden field', 'Jenis Hak': 'inline label - always visible', 'Nomor Hak': 'inline label - always visible', 'Kel/Kal': 'inline label - always visible', 'Kem/Kap': 'inline label - always visible', 'Kota/Kab': 'inline label - always visible', 'Berakhir H': 'hidden field', 'Dasar SK': 'hidden field', 'Penunjuk': 'hidden field', 'Tgl. Rapat': 'inline label - always visible', 'Asal-Usul': 'inline label - always visible', 'Kelompok': 'inline label - always visible', 'Tindak Lan': 'hidden field', 'Plotting': 'hidden field', 'Tahun': 'inline label - always visible', 'Status': 'inline label - always visible', 'Tgl. Tangg': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Tgl. Terim': 'hidden field', 'No. Telp': 'hidden field', 'Jenis': 'hidden field', 'Progre Sur': 'hidden field', 'Status Sur': 'hidden field', 'Penerima': 'inline label - visible with data', 'Tgl. Ambil': 'hidden field', 'Koordinat': 'hidden field', 'Progres Su': 'hidden field', 'Field32': 'hidden field', });
lyr_HGB_2020_2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});