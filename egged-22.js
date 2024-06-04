
function setListener() {

console.log("My JavaScript file is loaded ver16! - Setting Listener to Button");

const submitButton = document.querySelector('.actionBarBtn--submit'); // Select button by class
if (submitButton) {
  console.log("Button Found!");
  submitButton.addEventListener('click', callWebhook); // Attach event listener

} else {
  console.error("Button element with class 'actionBarBtn--submit' not found!");
}
}


async function callWebhook(event) {
  console.log("Inside Callwebhook function");

  var VerifiedValue;

  event.preventDefault(); // Prevent default form submission

  const webhookUrl = "https://hook.eu1.make.com/3j328m2y88j5gsrhwxpl4708sd6bhkq7";

  // Create an object to hold your data (optional for cleaner code)
  const data = {
    result1: 1,
    result2: 2
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Since data is an object
      },
      body: JSON.stringify(data) // Convert data object to JSON string
    });

    if (!response.ok) { // Check for successful response (status code 200-299)
      throw new Error(`Error calling webhook: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Webhook response:", responseData);
    // Handle successful response data here (optional)

	// add value to the mandatory field to allow submission 
    loader.engine.document.getElementById(113498574).setValue(({"value": "VERIFIED"}));   


    // Submit the form after successful webhook call (optional)
    form.submit();
  } catch (error) {
    console.error("Error calling webhook:", error);
    // Display error message to user (e.g., using alert, modal, or DOM manipulation)
    alert("An error occurred while processing your request. Please try again later.");
    event.preventDefault(); // Prevent default form submission

  }
}


window.onclick = setListener;
