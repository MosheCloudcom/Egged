function callWebhook(url, data) {
  // This function takes two arguments:
  //   - url: The URL of the webhook endpoint
  //   - data: An object containing the data to send to the webhook

  return fetch(url, {
    method: 'POST', // We want to send a POST request to the webhook
    headers: {
      'Content-Type': 'application/json' // Set the content type to JSON
    },
    body: JSON.stringify(data) // Convert the data object to JSON format before sending
  })
  .then(response => response.json()) // Parse the response as JSON
  .then(responseData => {
    // Handle the response data here
    console.log("Webhook response:", responseData);
  })
  .catch(error => {
    console.error("Error calling webhook:", error);
  });
}

window.onclick = callWebhook("https://hook.eu1.make.com/eqlcj79xiz1cf6z9csj2tb1mo7oestaw?id=1&amp;name=moshe", "{message: "Hello from my JavaScript code!",timestamp: Date.now()};");



