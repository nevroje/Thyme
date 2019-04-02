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

  render() {
    return (
      <>
        <p>View console for responses</p>
        <button onClick={() => this.getKimai()}>Ping</button>
        <button onClick={() => this.getUsers()}>Users</button>
        <button onClick={() => this.getTime()}>Timesheets</button>
        <button onClick={() => this.getCustomers()}>Cusotmers</button>
      </>
    );
  }
}

export default App;
