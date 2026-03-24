document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");
  
    reservationForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const partySize = document.getElementById("partySize").value;
  
 
      alert(`Thank you, ${name}! Your reservation for ${partySize} people on ${date} at ${time} has been submitted.`);
  
      reservationForm.reset();
    });
  });
  