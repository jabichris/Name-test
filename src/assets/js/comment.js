const comment = () => {
  let typeComment = document.getElementById("one");
  let writeComment = document.getElementById("two");
  if (writeComment.style.display !== "none") {
    writeComment.style.display = "none";
    typeComment.style.display = "block";
  } else {
    typeComment.style.display = "none";
    writeComment.style.display = "block";
  }
};
