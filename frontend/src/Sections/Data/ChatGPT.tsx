/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import React from "react";


const ChatGPT = ()=> {
  React.useEffect(() => {
    const testApiCall = async () => {
      const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: 'Hello, world!' }
        ],
        max_tokens: 20,
      };

      const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
        'Content-Type': 'application/json',
      };

      try {
        const response = await axios.post(apiEndpoint, requestBody, { headers });
        console.log(response.data);
      } catch (error) {
        // console.error('API Call Error:', error.response ? error.response.data : error.message);
      }
    };

    testApiCall();
  }, []);
}

ChatGPT() //This is here just to make the linter shut up
