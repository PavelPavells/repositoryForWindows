/*
 *  Handle clicks on the buttons
 */
const a = document.getElementById("howToCreate");
const b = document.getElementById("createNew");
const c = document.getElementById("howToUse");
const hideAndShow = (s,h1,h2) => {
  s.style.display = s.style.display === "none" ? "block" : "none";
  h1.style.display = h2.style.display = "none";
};
document.getElementById("btn_howToCreate").onclick = () => hideAndShow(a,b,c);
document.getElementById("btn_createNew").onclick = () => hideAndShow(b,a,c);
document.getElementById("btn_howToUse").onclick = () => hideAndShow(c,a,b);
/*
 *  Handle creation of a new shortened URL via the input field
 */
const out = document.getElementById("testOutput");
const spin = document.getElementById("spinner");
function handleClick() {
  const inp = document.getElementById("urlInput").value;
  if (!inp) return;   //If input is empty, return, do nothing!
  out.innerHTML = "";
  spin.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>';
  const url = "new/"+inp;
  var xhr = new XMLHttpRequest();
      xhr.open("GET",url);
      xhr.onload = function() {
          spin.innerHTML="";
          const obj = JSON.parse(xhr.responseText);
          if(xhr.status === 200) {
            out.innerHTML = `<code>
                                OriginalURL: ${obj.originalURL}<br>
                                ShorthandURL: <a href="${obj.shorthandURL}" target="_blank">${obj.shorthandURL}</a>
                             </code>`;
          }
          else out.innerHTML = `<code>ERROR: ${obj.ERROR}</code>`;
      };
      xhr.send();
}
 document.getElementById("CreateBtn").addEventListener("click", handleClick);