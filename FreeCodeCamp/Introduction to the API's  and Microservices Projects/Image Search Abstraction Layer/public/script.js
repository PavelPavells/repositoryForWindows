/*
 *  Handle clicks on the buttons
 */
const a = document.getElementById("howToSearch");
const b = document.getElementById("recent");
const hideAndShow = (s,h) => {
  s.style.display = s.style.display === "none" ? "block" : "none";
  h.style.display = "none";
};
document.getElementById("btn_howToSearch").onclick = () => hideAndShow(a,b);
document.getElementById("btn_recent").onclick = () => hideAndShow(b,a);