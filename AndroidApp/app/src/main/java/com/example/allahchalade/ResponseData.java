package com.example.allahchalade;

import org.json.JSONObject;

public class ResponseData {


    private String Status;
    private JSONObject Data;



    public ResponseData(String status, JSONObject data) {
        Status = status;
        Data = data;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public JSONObject getData() {
        return Data;
    }

    public void setData(JSONObject data) {
        Data = data;
    }


}
