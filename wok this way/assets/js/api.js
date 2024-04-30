"use strict";

const ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "78a1ce7e";
const API_KEY = "01b74f9be821ca4385971391a6f30bab";
const TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */
export const fetchData = async (queries, successCallback) => {
  const query = queries
    .join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");
  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}&${query}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      successCallback(data);
    } else {
      console.error("API request failed:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
