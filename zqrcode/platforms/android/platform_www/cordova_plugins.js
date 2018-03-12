cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/cordova-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "cordova-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Location",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.location"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.bluetooth"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.wifi"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.camera"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.notifications"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.microphone"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.contacts"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.calendar"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.nfc"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
        "pluginId": "cordova.plugins.diagnostic",
        "merges": [
            "cordova.plugins.diagnostic.external_storage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-barcodescanner": "0.7.4",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova.plugins.diagnostic": "4.0.3"
};
// BOTTOM OF METADATA
});