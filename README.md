# Covid-19-Device

# TODO:

- Arduino
  - Wifi Connection
  - Make server requests via http protocol
  - MPU6050 work
- Server
- Mobile App
- Admin App

## Arduino

- [x] Wifi Connection
- [x] Make server requests via http protocol
- [ ] Read MPU6050 raw values,
- [ ] Processing => Detecting movment for certain time(threshold).
- [ ] Generate Alarm or bink led, or print to serial. if movment detected

  dependency => time, movement
  filter => to smooth values
  google: dectect movement using mpu6050,

## Server

- [ ] Database Schema
- [ ] Api and Routing
- [ ] Controllers
- [ ] Authentication

### Model

data format json

```bash
User:
Name:
CNIC:
Age:
Address:
Contact:
Registered location:
Device: {id of device, alloted by the hospital admin}
Status: {disconnected, normal, outOfBound }
Guardian Name:
Emergency contact:
Email:
```

```bash
Hospital Name:
Address:
Admin Name:
Admin CNIC:
Admin contact:
Devices: { list of device ids provided to hospital, configured and unconfigured }
Email:
Password:

```

## FrontEnd

- [ ] Dashboard
- [ ] google Maps integration
- [x] signup page
- [x] patient registration page

## Useful Links

- [wifi connection](https://circuitdigest.com/microcontroller-projects/using-wifi-manager-on-nodemcu-to-scan-and-connect-wifi-networks)
- [http get request](https://techtutorialsx.com/2016/07/17/esp8266-http-get-requests/)

## Sensor Reading Material:

In navigation, dead reckoning is the process of calculating one's current position by using a previously determined position, or fix, and advancing that position based upon known or estimated speeds over elapsed time and course. The corresponding term in biology, used to describe the processes by which animals update their estimates of position or heading, is path integration.
link for Gait tracking
https://x-io.co.uk/gait-tracking-with-x-imu/

## Database connection issue

[Link](https://stackoverflow.com/questions/56237646/exception-in-initandlisten-nonexistentpath-data-directory-data-db-not-found)

```bash
  mongod --dbpath /System/Volumes/Data/data/db
```
