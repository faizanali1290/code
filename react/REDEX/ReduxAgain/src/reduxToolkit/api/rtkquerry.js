import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminAPi = createApi({
  reducerPath: "rtkapi", //this si the similar path that i give sore inside reducer

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    userAccount: builder.query({
      //here give query when we read data it added the base url
      query: (name) => "todos/101",
      providesTags: ["useaccount"],
    }),
    addacount: builder.mutation({
      query: () => ({
        url: "posts",
        body: {
          id: 101,
          title: "hi this is the title",
        },
        method: "POST",
      }),
    }),
  }),
});
// here we give name that name make a hook like userAccount
export const { useUserAccountQuery, useAddacountMutation } = adminAPi;
