window.onload = function() {
  /* Por defecto se muestra el texto en español, pero si el navegador no lo incluye, se muestra en inglés */
  if (!navigator.languages.includes("es")) {
    document.getElementById("about_one").innerText =
      "We are a cover band from Málaga (Spain) formed by María García (piano), Bego Ramos (violin) and Oliver Moya (clarinet), born with the aim of spreading video game, movie and anime music.";
    document.getElementById("about_two").innerText =
      "Since our first concert in 2017, we have played in a multitude of events throughout the geography of Malaga (Polo Digital for the University of Malaga and Glovalues , White and Black Night for the City Council of Malaga, Malaga Plaza, El Corte Inglés, Marbecon, RinconGo, AlhaurinGo, Artsenal and Level Up!), as well as outside of it (Jerez Manga Convention, FicZone + Granada Gaming Festival, LucenaGo and MarchenaGo).";
    document.getElementById("about_three").innerText =
      "If you are interested in us to play at your event (convention, festival, wedding ...) do not hesitate to contact us by email or a private message on your preferred social network.";
    document.getElementById("about_four").innerText =
      "We stream our rehearses on Twitch weekly and upload content from them and our concerts to YouTube, Instagram, Twitter and Facebook.";
    document.getElementById("about_five").innerText = 
    "With the coronavirus crisis we are less active, but both <a
    href = 'https://www.twitch.tv/magape_pianist'
    target = '_blank' > María < /a> and <a
    href = 'https://www.twitch.tv/olimobu'
    target = '_blank' > Oliver < /a> often stream on Twitch from their personal channels. And we have produced and released our first video game cover album!";
  }
  /* Introducir año actual en la información del Copyright */
  var date = new Date();
  var currentYear = date.getFullYear();
  document.getElementById("currentYear").innerText = currentYear;
};
