//link: https://circuitdigest.com/microcontroller-projects/using-wifi-manager-on-nodemcu-to-scan-and-connect-wifi-networks

#include <ESP8266WiFi.h> //https://github.com/esp8266/Arduino
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <DNSServer.h>
#include <WiFiManager.h> //https://github.com/tzapu/WiFiManager

void setup()
{
  Serial.begin(9600);
  WiFiManager wifiManager;
  wifiManager.resetSettings();
  wifiManager.autoConnect("WiFi Manager");
  Serial.println("connected :)");
}

void loop()
{
  String result = fetchMessage("http://jsonplaceholder.typicode.com/users/1");
  Serial.println(result);
  delay(30000); //Send a request every 30 seconds
}

String fetchMessage(char host[])
{
  HTTPClient http;
  http.begin(host);
  int httpCode = http.GET();
  String payload = "";
  if (httpCode > 0)
  {
    Serial.print("HTTP GET ... code: ");
    Serial.print(httpCode);
    if (httpCode == HTTP_CODE_OK)
    {
      payload = http.getString();
    }
  }
  else
  {
    Serial.printf("HTTP GET failed, error: %s\n", http.errorToString(httpCode).c_str());
  }

  http.end();
  return payload;
}