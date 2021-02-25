import { Server } from "https://js.sabae.cc/Server.js"
  const list = []
  class MyServer extends Server {
    api(path) {
      list.push(path)
      return list
    }
  }
new MyServer(8001);
//this is test
