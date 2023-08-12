
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"; 

const API_KEY = "c36ebfd6c8ff4ac2ac8ca7fdb4dfe4fd";
const BASE_URL = "https://newsapi.org/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (q) => `${q}&apiKey=${API_KEY}`,
    }),
    getTopHeadlineNews: builder.query({
      query: () =>
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery, useGetTopHeadlineNewsQuery } = api;
