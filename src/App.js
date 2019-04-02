import React, { Component } from "react";
import axios from "axios";
class App extends Component {
// get pong response
  async getKimai() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "ping", {
        headers: headers
      });
      const kimai = await response;
      console.log(kimai);
      return kimai;
    } catch (error) {
      console.error(error);
    }
  }
// get user data
  async getUsers() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "users", {
        headers: headers
      });
      const user = await response;
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }
// get timesheets
  async getTime() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "timesheets", {
        headers: headers
      });
      const time = await response;
      console.log(time);
      return time;
    } catch (error) {
      console.error(error);
    }
  }
// get customers
  async getCustomers() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "customers", {
        headers: headers
      });
      const customer = await response;
      console.log(customer);
      return customer;
    } catch (error) {
      console.error(error);
    }
  }

// get i18n
  async getTranslation() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "config/i18n", {
        headers: headers
      });
      const translate = await response;
      console.log(translate);
      return translate;
    } catch (error) {
      console.error(error);
    }
  }

// post timesheets
  async postTimesheets(timesheets) {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = axios.post(apiUrl + "timesheets",
      {
          "begin": "2019-04-02T13:28:17.113Z",
          "end": "2019-04-02T13:28:17.113Z",
          "customer": 0,
          "project": 0,
          "activity": 0,
          "description": "string",
          "fixedRate": "Unknown Type: float",
          "hourlyRate": "Unknown Type: float"
      },
      {
        headers: headers
      });
      const timesheet = await response;
      console.log(timesheet);
      return timesheet;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <p>View console for responses</p>
        <button onClick={() => this.getKimai()}>Ping</button>
        <button onClick={() => this.getUsers()}>Users</button>
        <button onClick={() => this.getTime()}>Timesheets</button>
        <button onClick={() => this.getCustomers()}>Customers</button>
        <button onClick={() => this.getTranslation()}>Translations</button>
        <button onClick={() => this.postTimesheets()}>postTimesheets</button>
      </>
    );
  }
}

export default App;
