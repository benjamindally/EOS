$(function() {
  checkDevice();
  honeyTimeout();

  window.onscroll = function() {
    stickyNav();
  };

  $("#home_nav_link").click(function() {
    let home = document.getElementById("band_name_row");
    home.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  });
  $("#listen_nav_link").click(function() {
    let listen = document.getElementById("music_header");
    listen.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  });
  $("#about_nav_link").click(function() {
    let about = document.getElementById("biogrpahy_container_outside_wrapper");
    about.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  });
  $("#contact_nav_link").click(function() {
    let contact = document.getElementById("connect_form_outer_row");
    contact.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  });

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var bio = document.getElementById("bio_dont");
  var bioBackround = document.getElementById("bio_parallax_picture");

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky_nav");
      bio.classList.add("iframe_dont_move");
      bioBackround.classList.add("bio_backgound_dont_move");
    } else {
      navbar.classList.remove("sticky_nav");
      bio.classList.remove("iframe_dont_move");
      bioBackround.classList.remove("bio_backgound_dont_move");
    }
  }

  function honeyTimeout() {
    setTimeout(function() {
      $(".submit_button").attr("id", "connect_submit_button");
    }, 5000);
  }

  $("#connect_submit_button").click(function() {
    let name = $("#name")
      .val()
      .trim();
    let email = $("#email")
      .val()
      .trim();
    let message = $("#message")
      .val()
      .trim();
    let regEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let honeypot = $("#url")
      .val()
      .trim();

    document.getElementById("message_break").innerHTML = "<p><p>";
    document.getElementById("email_break").innerHTML = "<p><p>";
    document.getElementById("name_break").innerHTML = "<p><p>";

    if (honeypot != "") {
      console.log("Spam Detected");
      return;
    }
    if (name === "") {
      let errorMessageName = "Please enter your first name.";
      document.getElementById("name_break").innerHTML =
        "<p>" + errorMessageName + "<p>";
    }

    if (!regEx.test(email)) {
      let errorMessageEmail = "Please enter a valid email address";
      document.getElementById("email_break").innerHTML =
        "<p>" + errorMessageEmail + "<p>";
    }

    if (message === "") {
      let errorMessageMessage = "Please enter a message.";
      document.getElementById("message_break").innerHTML =
        "<p>" + errorMessageMessage + "<p>";
    }

    // let dataString = "name=" + name + "&email=" + email + "&message=" + message;

    let url = $(".contact_form").attr("action");
    let type = $(".contact_form").attr("method");
    let data = {
      name: name,
      email: email,
      message: message,
    };

    if (regEx.test(email) && name != "" && message != "") {
      $.ajax({
        type: type,
        url: url,
        data: data,
        cache: false,
        success: function(result) {
          console.log(result);
        },
      });
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      alert(`Thank you.`);
    }
  });

  function checkDevice() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $(".main")
        .removeClass("main_container")
        .addClass("mobile");
      $("#mobile_pic").toggle();

      $(".band_header")
        .removeClass("band_name")
        .addClass("band_name_moblie");

      $(".genre_header")
        .removeClass("genre")
        .addClass("genre_mobile");
    }
  }
});
