document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      let benutzername = document.getElementById('vorname').value;
  
      // Weiterleitung zu einer neuen Seite mit dem Abstimmungsinhalt
      window.location.href = 'voting.html?benutzername=' + benutzername;

    
    });
  });
  