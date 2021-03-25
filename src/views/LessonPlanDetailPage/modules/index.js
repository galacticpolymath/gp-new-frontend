/**
 * Fetch but abandon the request after `timeout` milliseconds.
 * Source: https://dmitripavlutin.com/timeout-fetch-request/
 */
export const fetchWithTimeout = async (url, timeout = 3000) => {
  if (!timeout) {
    const response = await fetch(url);
    return response.json();
  }

  const controller = new AbortController();
  const { signal } = controller;

  setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, { signal });

  return response.json();
};
