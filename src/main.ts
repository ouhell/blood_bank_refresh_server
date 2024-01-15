import axios from "axios";
import { config } from "dotenv";
config();
const hostname = process.env.hostname;
const token = process.env.access_token;
const timout = 15000;
function refresh() {
  console.log("refreshing ::::");
  axios({
    url: `${hostname}/api/admin/refresh-blood`,
    method: "put",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      console.log("refresh sucesss :::::");
    })
    .catch((err) => {
      console.log("refresh error ::::: ", err);
    });
  setTimeout(async () => {
    refresh();
  }, timout);
}

refresh();
