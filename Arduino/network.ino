//link: https://circuitdigest.com/microcontroller-projects/using-wifi-manager-on-nodemcu-to-scan-and-connect-wifi-networks

#include <ESP8266WiFi.h> //https://github.com/esp8266/Arduino
//needed for library
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <WiFiManager.h> //https://github.com/tzapu/WiFiManager
#include <ESP8266HTTPClient.h>

// defining pins.
#define trigger D0
#define LED D2
#define power D3

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(trigger, INPUT);
  // pinMode(LED,OUTPUT);
  // pinMode(power,OUTPUT);
  if (digitalRead(trigger) == HIGH)
  {
    Serial.println("trgger value");
    Serial.println(trigger);
    //digitalWrite(power,HIGH);
    Serial.println("power is HIGH");
    WiFiManager wifiManager;
    wifiManager.resetSettings();
    wifiManager.autoConnect("CIRCUIT DIGEST WiFi Manager");
    Serial.println("connected :)");
  }
  Serial.println("trigger value");
  Serial.println(trigger);
}

void loop()
{
  if (WiFi.status() == WL_CONNECTED)
  {
    Serial.println("Wifi Connected...");
    HTTPClient http;                                           //Declare an object of class HTTPClient
    http.begin("http://jsonplaceholder.typicode.com/users/1"); //Specify request destination
    int httpCode = http.GET();                                 //Send the request
    Serial.printf("HTTP GET ... code: %d\n", httpCode);
    if (httpCode > 0)
    {
      String payload = http.getString(); //Get the request response payload
      Serial.println(payload);           //Print the response payload
    }
    else
    {
      Serial.printf("HTTP GET failed, error: %s\n", http.errorToString(httpCode).c_str());
    }
    http.end(); //Close connection
  }
  else
  {
    Serial.println("Wifi Disconnected...");
  }
  delay(30000); //Send a request every 30 seconds
}