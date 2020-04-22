#include <ESP8266WiFi.h>
//#include <Bridge.h>
//#include <HttpClient.h>
#include <ESP8266HTTPClient.h>
/*Put your SSID & Password*/
const char* ssid = "PTCL-BB";    // Enter SSID here
const char* password = "59379C59";  //Enter Password here

//const char* server = "104.24.127.61";

/* Set GET link with channel ID */
//const char* _getLink = "/search?q=arduino HTTP/1.0";

//WiFiClient client;

void setup() {
  Serial.begin(9600);
  delay(1000);

  Serial.println("Connecting to ");
  Serial.println(ssid);

  //connect to your local wi-fi network
  WiFi.begin(ssid, password);

  //check wi-fi is connected to wi-fi network
  while (WiFi.status() != WL_CONNECTED) {
  delay(500);
  Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

void loop() 
{
  if (WiFi.status() == WL_CONNECTED) 
  { //Check WiFi connection status
      HTTPClient http;  //Declare an object of class HTTPClient
 
      http.begin("http://jsonplaceholder.typicode.com/users/1");  //Specify request destination
      int httpCode = http.GET();                                                                  //Send the request
       Serial.println("hello code");                                                              //Send the request
       Serial.println(httpCode);
      if (httpCode > 0)
      { //Check the returning code
       Serial.println("hello2");
          String payload = http.getString();   //Get the request response payload
          Serial.println(payload);                     //Print the response payload
      }
      http.end();   //Close connection
     }
    delay(30000);    //Send a request every 30 seconds
}