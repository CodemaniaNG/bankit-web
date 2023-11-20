import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
// https://zino-1e15f54a9d19.herokuapp.com/api/v1
const baseUrl = "http://3.87.7.138";
export const mutationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const cookies = new Cookies();
      const token = cookies.get("token");
      // headers.set('x-api-key', `${process.env.BASE_KEY}`);
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerNewUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/send-phone-verification-code",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/verify-phone-number",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterNewUserMutation, useSendOtpMutation, useVerifyOtpMutation, useLoginMutation } = mutationApi;
