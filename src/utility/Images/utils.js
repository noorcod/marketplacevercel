export const getDefaultImage = (type) => {
    let imageURLs = "";
    if (type === "Laptop") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/laptops.jpg`,
      ]);
    } else if (type === "Mobile") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/mobiles.jpg`,
      ]);
    } else if (type === "Tablet") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/tablets.jpg`,
      ]);
    } else if (type === "TV / Monitor") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/tvs.jpg`,
      ]);
    } else if (type === "Desktop Computer") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/desktops.jpg`,
      ]);
    } else if (
      type === "Watch" ||
      type==='iwatch'||
      type === "Fitness Watch" ||
      type === "Smart Watch"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/watches.jpg`,
      ]);
    } else if (
      type === "Earbuds" ||
      type === "Headphones" ||
      type === "Headphone" ||
      type === "Wireless Earbuds" ||
      type === "Handsfree" ||
      type === "Neckband" ||
      type === "Headset" ||
      type === "Airpods"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/headphones.jpg`,
      ]);
    } else if (
      type === "Wireless Charger" ||
      type === "Charger" ||
      type === "Car Charger" ||
      type === "Adapter"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/chargingCables.jpg`,
      ]);
    } else if (
      type === "Speaker" ||
      type === "Bluetooth Speaker" ||
      type === "Sound bar"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/speakers.jpg`,
      ]);
    } else if (
      type === "Mobile Case/Cover" ||
      type === "Tablet Case/Cover" ||
      type === "Laptop Case/Cover" ||
      type === "Laptop Screen Protector" ||
      type === "Mobile Screen Protector" ||
      type === "Tablet Screen Protector" ||
      type === "Cover"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/screenProtectors.jpg`,
      ]);
    } else if (
      type === "Power Bank" ||
      type === "Magesafe charger" ||
      type === "Magsafe charger" ||
      type === "Battery"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/powerBanks.jpg`,
      ]);
    } else if (type === "Cable" || type === "Connector") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/connectorCables.jpg`,
      ]);
    } else if (
      type === "Keyboard" ||
      type === "Mouse" ||
      type === "Keyboard & Mouse" ||
      type === "Controller"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/keyboardMouse.jpg`,
      ]);
    } else if (type === "Printer" || type === "Scanner") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/printers.jpg`,
      ]);
    } else if (
      type === "USB" ||
      type === "RAM" ||
      type === "Hard Disk" ||
      type === "SSD" ||
      type === "SD Card"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/usbAndSdCards.jpg`,
      ]);
    } else if (
      type === "Camera" ||
      type === "Webcam" ||
      type === "Tripod" ||
      type === "Selfie Stick" ||
      type === "Drone Camera" ||
      type === "Ringlight" ||
      type === "Gimbal"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/cameras.jpg`,
      ]);
    } else if (type === "Sensor" || type === "Remote") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/sensors.jpg`,
      ]);
    } else if (type === "Microphone") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/microphones.jpg`,
      ]);
    } else if (type === "Bag") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/bags.jpg`,
      ]);
    } else if (
      type === "Docking Station" ||
      type === "Converter" ||
      type === "USB Hub"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/hubs.jpg`,
      ]);
    } else if (
      type === "Router" ||
      type === "Range Extender" ||
      type === "Wifi Adapter" ||
      type === "Wifi Hotspot Device" ||
      type === "Telephone"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/routers.jpg`,
      ]);
    } else if (
      type === "Mobile Mount" ||
      type === "Tablet Mount" ||
      type === "Laptop Mount" ||
      type === "LED Mount" ||
      type === "Holder"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/monitors.jpg`,
      ]);
    } else if (type === "Socket" || type === "Smart Plug" || type === "Switch") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/plugs.jpg`,
      ]);
    } else if (type === "Stylus Pen") {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/pens.jpg`,
      ]);
    } else if (
      type === "Smart TV Box" ||
      type === "Google Chromecast" ||
      type === "Streaming Device"
    ) {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/tvDevices.jpg`,
      ]);
    } else {
      return (imageURLs = [
        `${process.env. NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/other.jpg`,
      ]);
    }
  };
  