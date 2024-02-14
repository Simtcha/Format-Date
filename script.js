/*
Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok a vypíše do stránky datum v hezkém formátu.
Založte nový JavaScriptový program a v něm si pomocí funkce prompt zeptejte uživatele na den, měsíc a rok.
Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu. 28. 4. 2021
Vypisujte datum do webové stránky jako následující HTML kód.

<p class="date">
  <span class="day">28</span>. <span class="month">4</span>.
  <span class="year">2021</span>
</p>

Bonus
Zkuste tyto prvky lehce nastylovat pomocí CSS, aby vypadaly hezky.*/


let day = undefined
let month = undefined
let year = undefined

do {
    day = prompt("Zadej den (číslem): ")
    }
  while ((day > 31) || (isNaN(day)==true));

day = day.padStart(2,"0")

do {
    month = prompt("Zadej měsíc (číslem): ")
    }
  while ((month > 12) || (isNaN(month)==true));
month = month.padStart(2,"0")

  do {
    year = prompt("Zadej rok (číslem): ")  
  }
  while ((month > 9999) || (isNaN(month)==true));
year = year.padStart(4,"0")  

let date = day + "." + month + "." + year



document.body.innerHTML += `<p class="date">
<span class="day">${day}</span>. <span class="month">${month}</span>.
<span class="year">${year}</span>
</p>`