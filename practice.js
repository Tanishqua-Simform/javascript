// Count vowels in word using Function keyword
function countVowels(word) {
  count = 0;
  vowels = "aeiouAEIOU";
  for (let char of word) {
    for (let v of vowels) {
      if (v === char) {
        count += 1;
      }
    }
  }
  return count;
}

// Perform same using Arrow function
const countVowelsArrow = (word) => {
  count = 0;
  vowels = "aeiouAEIOU";
  for (let char of word) {
    for (let v of vowels) {
      if (v === char) {
        count += 1;
      }
    }
  }
  return count;
};

console.log("Let's count the number of vowels in a word.");
console.log("Write function - countVowels('Write your string here')");

// document.getElementsByClassName("box")[0].innerText = "Hahaha Box 1";
// document.getElementsByClassName("box")[1].innerText = "Muhaahhaha Box 2";
// document.getElementsByClassName("box")[2].innerText = "Hehehe Box 3";

let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.marginLeft = "50%";

let body = document.querySelector("body").prepend(btn);

let div = document.createElement("div");
div.innerHTML =
  "<p>This is a <span>div</span> element. It has been added from JavaScript.</p><p>Do you see a button above me? that was also added from practice.js</p><p>Do you want to see a surprise function? Go to console, it is waiting for you there.</p>";
div.style.backgroundColor = "aqua";
div.style.textAlign = "center";

btn.after(div);
