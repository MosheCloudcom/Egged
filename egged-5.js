function callWebhook() {
  console.log("Calling webhook with URL:", "https://hook.eu1.make.com/eqlcj79xiz1cf6z9csj2tb1mo7oestaw?id=2&name=moshe2");

  return fetch("https://hook.eu1.make.com/eqlcj79xiz1cf6z9csj2tb1mo7oestaw?id=2&name=moshe2", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{}' // Empty body as you're sending data in the URL
  })
  .then(response => response.json())
  .then(responseData => {
    console.log("Webhook response:", responseData);
  })
  .catch(error => {
    console.error("Error calling webhook:", error);
  });
};


window.onclick = callWebhook;
