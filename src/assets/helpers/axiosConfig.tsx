"use client";
import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API ?? "",
  headers: {
    Accept: "applications/json",
    "Content-Type": "application/json",
  },
});

export default http;
