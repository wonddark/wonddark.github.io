let firstAnimate = null;

function animateFirst() {
  const skillsContainer = document.getElementsByClassName("skills-container")?.[0];

  const svgElements = skillsContainer.getElementsByTagName("svg");
  for (let svgElement of svgElements) {
    svgElement.style.fontSize = "unset";
    svgElement.style.top = "unset";
    svgElement.style.left = "unset";
    svgElement.style.animationDelay = "unset";
    svgElement.style.display = "none";
  }

  const containerWidth = skillsContainer.clientWidth;
  const containerHeight = skillsContainer.clientHeight;

  const fontSizes = [14, 24, 38, 50, 72];

  const maxElements = Math.floor(containerWidth / 38);

  for (let i = 0; i < maxElements; i++) {
    const randomPositionX = Math.random() * containerWidth;
    const randomPositionY = Math.random() * containerHeight;
    const randomFontSizeIndex = Math.floor(Math.random() * fontSizes.length);

    const svgElement = svgElements.item(Math.floor(Math.random() * (svgElements.length - 1)));
    svgElement.style.fontSize = `${fontSizes[randomFontSizeIndex]}px`;
    svgElement.style.top = `${randomPositionY}px`;
    svgElement.style.left = `${randomPositionX}px`;
    svgElement.style.animationDelay = `${Math.random() * (1000 - 1)}ms`;
    svgElement.style.display = "initial";
  }

  if (firstAnimate) {
    clearInterval(firstAnimate);
  }

  firstAnimate = setInterval(animateFirst, 5000);
}

animateFirst();