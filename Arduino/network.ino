//link: https://circuitdigest.com/microcontroller-projects/using-wifi-manager-on-nodemcu-to-scan-and-connect-wifi-networks

#include <ESP8266WiFi.h> //https://github.com/esp8266/Arduino
//needed for library
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <WiFiManager.h> //https://github.com/tzapu/WiFiManager

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
    //digitalWrite(power,LOW);
    Serial.println("power is LOW");
    while (WiFi.status() == WL_CONNECTED)
    {
      //digitalWrite(LED,HIGH);
      Serial.println("led is HIGH");
      delay(500);
      //digitalWrite(LED,LOW);
    }
  }
  else
  {
    Serial.println("led is LOW");
    digitalWrite(LED, LOW);
  }
}