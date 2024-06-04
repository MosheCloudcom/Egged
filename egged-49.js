function setListener() {

console.log("Set Listner Function");

const verifyButton = document.getElementById("VerifyButton");

if (verifyButton) {
  console.log("Button Found!");
  verifyButton.addEventListener('click', callWebhook, true); // Pass `event` object
} else {
  console.error("Button element with ID VerifyButton not found!");
}
}

function HideSubmitButton() {

console.log("Hide Submit Button Function");

const actionBar = document.querySelector('div[data-type="form-action-bar"]');
	if (actionBar) {
		console.log("Submit button Div FOUND - HIDING");
        actionBar.style.display = 'none';
	} else {
		console.error("Element with data-type='form-action-bar' not found!");
	}

	const errorText = document.getElementById(113511878);
	if (errorText) {
		console.log("Error Text Found  - HIDING");
        errorText.style.display = 'none';
	} else {
		console.error("Erro Text element NOT found");
	}
	
	setListener();
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
		console.log("Submit button Div FOUND - SHOWING");
        actionBar.style.display = 'block ';
	} else {
		console.error("Element with data-type='form-action-bar' not found!");
	}
 
	const errorText = document.getElementById(113511878);
	if (errorText) {
		console.log("Error Text Found  - Showing");
        errorText.style.display = 'none';
	} else {
		console.error("Erro Text element NOT found");
	}
 

  } catch (error) {
    console.error("Error calling webhook:", error);
    // Display error message to user (e.g., using alert, modal, or DOM manipulation)
    // alert("An error occurred while processing your request. Please try again later.");
    loader.engine.document.getElementById(113511878).Hidden = 0;  

  }
}

// Function to check if the target element exists
function checkElement() {
	
	//const actionBar = document.querySelector('div[data-type="form-action-bar"]');
	
    var elements = document.querySelectorAll('div[data-type="form-action-bar"]');
    if (elements.length > 0) {
        // If the element exists, stop the interval and run the  function
        clearInterval(checkInterval);
        HideSubmitButton();
    }
}

// Check for the existence of the target element every 100 milliseconds
var checkInterval = setInterval(checkElement, 100);

//window.onclick = setListener;
