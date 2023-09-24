document.addEventListener('DOMContentLoaded', function () {
    const questionElements = document.querySelectorAll('.faq-question');
    const bookingButtons = document.querySelectorAll('.btnforbooking');
    const overlay = document.getElementById('overlay');
    const selectedSeatsContainer = document.getElementById('selectedSeats');
    const seatButtons = document.querySelectorAll('.btndesign button');

    let selectedSeatNumber = 1;
    let selectedRate = 10; // Default rate

    // Function to toggle a question and answer
    function toggleQuestion(question) {
        const answer = question.nextElementSibling;
        const arrowIcon = question.querySelector('.fa-chevron-down');

        // Close all other dropdowns and reset arrow icons
        questionElements.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.nextElementSibling.style.display = 'none';
                const otherArrowIcon = otherQuestion.querySelector('.fa-chevron-down');
                otherArrowIcon.style.transform = 'rotate(0deg)';
            }
        });

        // Toggle the visibility of the answer and rotate arrow
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            arrowIcon.style.transform = 'rotate(180deg)';
        }
    }

    // Open the first FAQ item initially
    toggleQuestion(questionElements[0]);

    // Add click event listeners to all FAQ questions
    questionElements.forEach(question => {
        question.addEventListener('click', function () {
            toggleQuestion(this);
        });
    });

    // Function to calculate the total cost of selected seats
    function calculateTotalCost(selectedSeatNumber, rate) {
        return selectedSeatNumber * parseFloat(rate);
    }

    // Function to calculate the total cost for all data-rate buttons for a given seat count
    function calculateTotalCostForAllRates(seatCount) {
        const totalCosts = {};
        bookingButtons.forEach(button => {
            const rate = parseFloat(button.getAttribute('data-rate'));
            totalCosts[rate] = seatCount * rate;
        });
        return totalCosts;
    }

    // Function to update the selected seats text and total cost
    function updateSelectedSeatsText(seatCount, rate) {
        const selectedSeat = `You have selected ${seatCount} seat`;
        const seatCheck = document.createElement('h5');
        const totalCost = calculateTotalCost(seatCount, rate);
        seatCheck.innerHTML = `Total amount is: ${rate} * ${seatCount} = ${totalCost} $`;
        selectedSeatsContainer.innerHTML = selectedSeat;
        selectedSeatsContainer.appendChild(seatCheck);

        // Calculate and display total cost for all data-rate buttons
        const totalCosts = calculateTotalCostForAllRates(seatCount);
        bookingButtons.forEach(button => {
            const rate = parseFloat(button.getAttribute('data-rate'));
            const total = totalCosts[rate];
            const bookText = `Book your ${rate} $ seat (${total} $)`;
            button.textContent = bookText;
        });
    }

    // Add click event listeners to seat buttons
    seatButtons.forEach(button => {
        button.addEventListener('click', function () {
            seatButtons.forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
            selectedSeatNumber = parseInt(button.getAttribute('data-seat'));
            updateSelectedSeatsText(selectedSeatNumber, selectedRate);
        });
    });

    // Add click event listeners to booking buttons
    bookingButtons.forEach(button => {
        button.addEventListener('click', function () {
            overlay.style.display = 'block';
            selectedRate = parseFloat(button.getAttribute('data-rate'));
            updateSelectedSeatsText(selectedSeatNumber, selectedRate);
        });
    });

    // Add click event listener to closePopupButton
    const closePopupButton = document.getElementById('closePopupButton');
    closePopupButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        alert('Register yourself first for booking your ticket.');
        // Redirect to signup.html
        window.location.href = '/Home/TicketRegistration';
    });
});



//const priceCount = 8;
//const bookingButtons = document.querySelectorAll(".btnforbooking");

//let totalCost = 0;

//bookingButtons.forEach(button => {
//    const priceString = button.getAttribute("data-rate");
//    const price = parseFloat(priceString);
//    const subtotal = price * seatCount;

//    tatalCost += subtotal;

//    button.addEventListener("click", () => {
//        console.log(`You have booked a seat for $${price}.`);

//    });
//});
//console.log(`Total cost for ${seatCount} seats: $${totalCost}`);


// Form Validation

function validateForm() {
    var name, email, address, mobile, otp, spnm, spmb, spem, spad, spotp, status = true;

    name = document.getElementById("name").value;
    email = document.getElementById("email").vale;
    mobile = document.getElementById("mobile").value;
    address = document.getElementById("address").value;
    otp = document.getElementById("otp").value;

    spnm.innerText = "";
    spmb.innerText = "";
    spem.innerText = "";
    spad.innerText = "";
    spotp.innerText = "";


    // Validate Nmme

    if (name.length == 0) {
        spnm.innerText = "Please enter your name.";
        return false;
    }
    else if (neme.length < 3) {
        spnm.innerText = "Please enter a valid name.";
        return false;
    }
    else if (name.indexOf(' ') < 2) {
        spnm.innerText = "Please enter full name.";
        return false;
    }

    // Validate Mobile number

    if (mobile.length == 0) {
        spmb.innerText = "Please enter your mobile number.";
        return false;
    }
    else if (mobile.length != 4) {
        spmb.innerText = "Invalid mobile number. Please enter valid mobile number.";
        return false;
    }

    // Validate Email Address

    if (email.length == 0) {
        spem.innerText = "Please enter your email address.";
        return false;
    }

    // Validate Address

    if (address.length == 0) {
        spad.innerText = "Please enter your address.";
        return false;
    }
    else if (address.length < 10) {
        apad.innerText = "Please enter your full address.";
        return false;
    }

    // validate OTP

    if (otp.length == 0) {
        spotp.innerText = "Please enter your OTP.";
        return false;
    }
    else if (otp.length < 4) {
        spotp.innerText = "Please enter valid OTP.";
        return false;
    }s
    return status;
    }
