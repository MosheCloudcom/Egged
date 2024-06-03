function callWebhook(url) {
  
  //   - url: The URL of the webhook endpoint
  
  return fetch(url, {
    method: 'POST', // We want to send a POST request to the webhook
    headers: {
      'Content-Type': 'application/json' // Set the content type to JSON
    },
  })
  .then(response => response.json()) // Parse the response as JSON
  .then(responseData => {
  })
  .catch(error => {
    console.error("Error calling webhook:", error);
  });
}

window.onclick = callWebhook("https://hook.eu1.make.com/eqlcj79xiz1cf6z9csj2tb1mo7oestaw?id=2&amp;name=moshe2");



