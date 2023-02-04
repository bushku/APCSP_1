---
toc: true
layout: post
comments: true
description: These are 2 other students' project videos.
categories: [APCSP]
title:  Project Videos
---

# Emma's Group
 - Used a lot of keys/values
 - Used algorithms
 - My group could learn a lot from the video using keys/values and algorithms while listing the merchendise items

# Team Berries
 - Made a table using API
 - My group did something similar with jokes about merchendise


<table id="BMITable">
  <thead>
    <tr>
      <th>BMI</th>
    </tr>
  </thead>
  <tbody id="BMIList">
  </tbody>
</table>
<br>
<input type="text" id="BMIValue">
<button id="addBMIButton">Add BMI</button>
<script>
const BMIList = document.getElementById("BMIList");
const BMIValue = document.getElementById("BMIValue");
const addBMIButton = document.getElementById("addBMIButton");

addBMIButton.addEventListener("click", function() {
  const bmi = BMIValue.value;
  const newRow = document.createElement("tr");
  const newBMI = document.createElement("td");
  newBMI.innerText = bmi;
  newRow.appendChild(newBMI);
  BMIList.appendChild(newRow);
});
</script>