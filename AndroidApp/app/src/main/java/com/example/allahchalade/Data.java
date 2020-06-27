package com.example.allahchalade;

import org.json.JSONObject;

public class Data {
    private JSONObject location;
    private String name;
    private String CNIC;
    private String _id;
    private String address;
    private String Contact;

    public Data(JSONObject location, String name, String CNIC, String _id, String address, String contact) {
        this.location = location;
        this.name = name;
        this.CNIC = CNIC;
        this._id = _id;
        this.address = address;
        Contact = contact;
    }

    public Data() {
    }

    public JSONObject getLocation() {
        return location;
    }

    public void setLocation(JSONObject location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCNIC() {
        return CNIC;
    }

    public void setCNIC(String CNIC) {
        this.CNIC = CNIC;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return Contact;
    }

    public void setContact(String contact) {
        Contact = contact;
    }
}
