var navBar = document.getElementById("maindiv");
      var arr1 = [
        "UIDevelopment",
        "Angular",
        "ReactJS",
        "Vuejs",
        "Mean",
        "Mern",
        "DigitalMarketing",
        "Python",
        "Ionic",
        "ReactNative",
        "WebDev",
      ];

      var arr2 = ["Home", "Placements", "Corporate Training", "Contact Us"];
      var arr3 = [
        "UIDevelopment Course",
        "Angular Course",
        "ReactJS Course",
        "DigitalMarketing Course",
        "Python Course",
      ];
      //creating dynamic html and appending in header
      var appendNav = "";
      appendNav += "<ul>";
      for (var i = 0; i < arr1.length; i++) {
        appendNav += "<li>" + arr1[i] + "</li>";
      }
      appendNav += "</ul>";
      navBar.innerHTML = appendNav;

      var footBar = document.getElementById("subdiv");

      //creating acheiversit logo , content about it and appending to footer
      var firstDiv = document.querySelectorAll("footer div:first-child")[0];
      var creatingLogo = document.createElement("img");
      creatingLogo.setAttribute(
        "src",
        "https://www.achieversit.com/assets/images/AIT-white.jpg"
      );
      firstDiv.appendChild(creatingLogo);

      var aboutInstitute = document.createElement("p");
      aboutInstitute.innerText =
        "AchieversIT - provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.";
      firstDiv.appendChild(aboutInstitute);
      aboutInstitute.setAttribute("id", "para");

      //creating heading tag and list and appending to footer
      var secondDiv = document.querySelector("footer div:nth-child(2)");
      var creatingHeading = document.createElement("h2");
      creatingHeading.innerText = "COMPANY";
      secondDiv.append(creatingHeading);

      var appendSecondDiv = "";
      appendSecondDiv += "<ol>";
      for (var j = 0; j < arr2.length; j++) {
        appendSecondDiv += "<li>" + arr2[j] + "</li>";
      }
      appendSecondDiv += "</ol>";

      secondDiv.innerHTML = appendSecondDiv;

      //creating heading tag and list and appending to footer (3rd div)
      var thirdDiv = document.querySelector("footer div:nth-child(3)");
      var creatingHeading2 = document.createElement("h2");
      creatingHeading2.innerText = "Trending courses";
      thirdDiv.appendChild(creatingHeading2);

      var appendThirdDiv = "";
      appendThirdDiv += "<ol>";
      for (var k = 0; k < arr3.length; k++) {
        appendThirdDiv += "<li>" + arr3[k] + "</li>";
      }
      appendThirdDiv += "</ol>";

      thirdDiv.innerHTML = appendThirdDiv;

      //creating address and contact details
      var fourthDiv = document.querySelector("footer div:last-child");
      var creatingHeading3 = document.createElement("h2");
      creatingHeading3.innerText = "Contact Info";
      fourthDiv.appendChild(creatingHeading3);

      var creatingAddress = document.createElement("address");
      creatingAddress.innerText =
        "#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029";
      fourthDiv.appendChild(creatingAddress);

      var creatingPhoneNumber = document.createElement("p");
      creatingPhoneNumber.innerText = "India : +91 8431-040-457";
      fourthDiv.appendChild(creatingPhoneNumber);

      var creatingMailId = document.createElement("p");
      creatingMailId.innerText = "info@achieversit.com";
      fourthDiv.appendChild(creatingMailId);