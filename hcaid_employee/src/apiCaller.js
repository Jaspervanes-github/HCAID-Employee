const sendRequestToBackend = async () => {
    try {
      const response = await fetch('https://workforcewatchapi.onrender.com');
      if (response.ok) {
        // Process the response data as needed
      } else {
        console.error('Failed to fetch data from the backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
};
  
const startInterval = () => {
    // Send an initial request when the interval starts
    sendRequestToBackend();
  
    // Set up a timer to send requests every 14 minutes (14 * 60 * 1000 milliseconds)
    const intervalId = setInterval(() => {
      sendRequestToBackend();
    }, 14 * 60 * 1000);
  
    return intervalId;
};
  
export { startInterval };
  