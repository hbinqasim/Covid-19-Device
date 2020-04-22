// Sample code for making http request.
// Note: it's http not https
// Useful links:
// https://techtutorialsx.com/2016/07/17/esp8266-http-get-requests/
// https://www.arduino.cc/en/Tutorial/HttpClient
// https://gist.github.com/yutashi/1313444a3173e835c33602b7c8c25f24
// https://circuits4you.com/2019/01/10/esp8266-nodemcu-https-secured-get-request/

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

/*Put your SSID & Password*/
const char *ssid = "<NETWORK NAME>"; // Enter SSID here
const char *password = "<PASSWORD>"; //Enter Password here

//WiFiClient client;

void setup()
{
  Serial.begin(9600);
  delay(1000);
  Serial.println("Connecting... ");
  //connect to your local wi-fi network
  WiFi.begin(ssid, password);
  //check wi-fi is connected to wi-fi network
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

void loop()
{
  //Check WiFi connection status
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;                                           //Declare an object of class HTTPClient
    http.begin("http://jsonplaceholder.typicode.com/users/1"); //Specify request destination
    int httpCode = http.GET();                                 //Send the request                                                           //Send the request
    Serial.println(httpCode);
    //Check the returning code
    if (httpCode > 0)
    {
      String payload = http.getString(); //Get the request response payload
      Serial.println(payload);           //Print the response payload
    }
    http.end(); //Close connection
  }
  delay(30000); //Send a request every 30 seconds
}