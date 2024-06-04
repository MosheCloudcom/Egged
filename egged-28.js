
function setListener() {

console.log("My JavaScript file is loaded ver25! - Setting Listener to Button");

const verifyButton = document.getElementById("VerifyButton");

if (verifyButton) {
  console.log("Button Found!");
  verifyButton.addEventListener('click', callWebhook); // Pass `event` object
} else {
  console.error("Button element with ID VerifyButton not found!");
}

}


async function callWebhook(event) {
  console.log("Inside Callwebhook function");

  var VerifiedValue;

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
	
	
    const actionBar = document.querySelector('div[data-type="form-action-bar"]');
	if (actionBar) {
		console.log("Submit button Div FOUND");
        actionBar.style.display = 'block !important';
	} else {
		console.error("Element with data-type='form-action-bar' not found!");
	}
  

  } catch (error) {
    console.error("Error calling webhook:", error);
    // Display error message to user (e.g., using alert, modal, or DOM manipulation)
    alert("An error occurred while processing your request. Please try again later.");

  }
}


window.onclick = setListener;
