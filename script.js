const btn = document.getElementsByClassName("btn")[0];
const inputTag = document.getElementsByClassName("input-text")[0];
const content = document.getElementsByClassName("content")[0];
const container = document.getElementsByClassName("container")[0];
let listCount = 1;
btn.addEventListener("click", (event) => {
  const inputValue = inputTag.value;
  if (inputTag.value === "") {
    alert("Enter Something");
  } else {
    const parDiv = document.createElement("div");
    parDiv.classList.add("parent-Div");
    parDiv.addEventListener("click", () => {
      const exitClass = spanTag.classList.contains("doneTask");
      if (exitClass) {
        spanTag.classList.remove("doneTask");
      } else {
        spanTag.classList.add("doneTask");
      }
    });
    const spanTag = document.createElement("span");
    spanTag.classList.add("span-tag");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    trashIcon.addEventListener("click", () => {
      parDiv.remove();
      listCount = 1;
      return;
    });
    const listNumToString = listCount.toString() + ". " + inputValue;
    spanTag.append(listNumToString);
    parDiv.append(spanTag, trashIcon);
    content.append(parDiv);
    container.append(content);
    inputTag.value = "";
    listCount += 1;
  }
});
