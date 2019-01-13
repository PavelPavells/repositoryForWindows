//  Gets the Name of the chosen File and shows it after .75s

const label = document.getElementById("l_upfile");
const input = document.getElementById("upfile");
input.addEventListener("change", e => {
  const fileName = e.target.value.split("\\").pop();
  label.innerHTML = "<i class='fa fa-spinner fa-pulse fa-2x fa-fw'></i>";
  setTimeout(() => {
    label.innerHTML = fileName;
  }, 750);
});

//  On Submit: Check if there is a file and do some funny stuff if not :D
let emptyCount = -1;
const msgArr = ["Please choose a File", "Please!", "A File, please?", "Oh come on!", "You need to put a file in here...", ":-(", "..........", "Are you kidding me?", "REALLY?!", "I will go!", "I'm serious, one more click and it's over"];
document.getElementById("form").addEventListener("submit", e => {
  // Check if the user selected a File.
  if (!input.value) {
    e.preventDefault();
    emptyCount++;
    if (emptyCount > 10) document.getElementsByTagName("body")[0].style.display = "none";
    else label.innerHTML = msgArr[emptyCount];
  }
})