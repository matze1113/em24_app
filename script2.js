document.addEventListener('DOMContentLoaded', function() {
    // Länderdaten
    let länder = ["Deutschland", "Spanien", "Frankreich", "Niederlande", "England", "Italien", "Türkei", "Kroatien", "Albanien", "Tschechien", "Belgien", "Österreich", "Ungarn", "Serbien", "Dänemark", "Slowenien", "Schweiz", "Rumänien", "Portugal", "Slowakei"];
  
    // Funktion zur Erzeugung von Optionselementen
    function createOptionElement(value) {
      let option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      return option;
    }
  
    // Optionen für alle Plätze erstellen
    let firstPlaceSelect = document.getElementById('firstPlace');
    let secondPlaceSelect = document.getElementById('secondPlace');
    let thirdPlaceSelect = document.getElementById('thirdPlace');
  
    länder.forEach(function(land) {
      let option = createOptionElement(land);
      firstPlaceSelect.appendChild(option.cloneNode(true));
      secondPlaceSelect.appendChild(option.cloneNode(true));
      thirdPlaceSelect.appendChild(option.cloneNode(true));
    });
  
    // Formularabsendung verarbeiten
    document.getElementById('votingForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Standardformularabsendung verhindern
  
      let formData = new FormData(this);
      let urlParams = new URLSearchParams(formData);
  
      // Weiterleitung zur Dankesseite
      window.location.href = 'voting-thankyou.html?' + urlParams.toString();
    });
  });
  
  
  
  
  