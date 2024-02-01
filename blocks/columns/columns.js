export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add("columns-img-col");
        }
      }
    });
  });
}

// const assignClassName = () => {
//   // Get all div elements within the specified parent element (in this case, with class "columns")
//   const divs = document.querySelectorAll(".columns div");

//   // Loop through each div
//   divs.forEach((div) => {
//     // Check if div contains text but not images
//     const hasText = Array.from(div.childNodes).some(
//       (node) => node.nodeType === 3 && node.textContent.trim().length > 0
//     );
//     const hasImages = div.querySelector("img");

//     // If the div has text but no images, assign the class name "text-box"
//     if (hasText && !hasImages) {
//       div.classList.add("text-box");
//     }
//     // Check if the paragraph is a button container
//     if (div.classList.contains("button-container")) {
//       // Wrap the paragraph (button) in a new div with class 'buttons-div' if it's not already wrapped
//       if (!div.parentNode.classList.contains("buttons-div")) {
//         const wrapperDiv = document.createElement("div");
//         wrapperDiv.classList.add("buttons-div");
//         div.parentNode.insertBefore(wrapperDiv, div);
//         wrapperDiv.appendChild(div);
//       }
//     }
//   });
// };

// export { assignClassName };

// // Call function
// assignClassName();
