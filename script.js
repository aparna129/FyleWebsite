function openPopup() {
  document.getElementById("contactPopup").style.display = "block";
}

window.onclick = function (event) {
  var popup = document.getElementById("contactPopup");
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}

function toggleImage(imageSrc, clickedDiv) {
  document.getElementById("mainImage").src = imageSrc;

  var eachTextDivs = document.querySelectorAll(".eachText");
  eachTextDivs.forEach(function (div) {
    div.style.backgroundColor = "";
    div.style.color = "";
  });

  clickedDiv.style.backgroundColor = "#FF3147";
  clickedDiv.style.color = "white";
}

function validateForm(event) {
  event.preventDefault();

  var workEmail = document.getElementsByName("work_email")[0].value;
  var firstName = document.getElementsByName("first_name")[0].value;
  var lastName = document.getElementsByName("last_name")[0].value;
  var consentChecked = document.getElementsByName("consent")[0].checked;

  if (workEmail === "" || firstName === "" || lastName === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!consentChecked) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  event.target.submit();

  event.target.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const imagesSection = document.getElementById("imageCarousel");
  const dots = document.querySelectorAll(".dot");

  function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  imagesSection.addEventListener("scroll", function () {
    const scrollLeft = imagesSection.scrollLeft;
    const imageWidth =
      imagesSection.scrollWidth / imagesSection.childElementCount;

    const visibleIndex = Math.round(scrollLeft / imageWidth);

    const activeDotIndex = Math.floor(visibleIndex / 4);
    updateDots(activeDotIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      const imageWidth =
        imagesSection.scrollWidth / imagesSection.childElementCount;
      const scrollToPosition = index * 4 * imageWidth;

      imagesSection.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });

      updateDots(index);
    });
  });
});
