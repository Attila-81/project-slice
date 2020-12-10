function pageLoad() {
  // to do applikáció létrehozása
  // 10 sor minden sorban egy checkbox
  // mellette egy szöveges mező, ahova írni lehet
  // minden sorban egy törlés gomb
  // új feladat hozzáadása gombbal bővíthető legyen a 10 sor

  // 0.lépés: változóba eltároljuk a root elemet
  let rootE = document.getElementById("root");

  // 1.lépés: változóba beírjuk a html kódunkat (Div, checkbox, text mező, delete gomb)
  // class-t tenni rájuk
  let rowData = `<div>
	<input type="checkbox" name="" id="" class="checkbox">
	<input type="text" name="text" id="" class="textInput">
	<input type="button" value="Delete" class="delete">
	</div>`;

  // 2.lépés: változóba el kell menteni a 10-es számot
  let toDoRow = 10;

  // 3.lépés: for ciklusba végigmegyünk a 10 elemen, és elkészítjük az elemeket
  for (let i = 0; i < toDoRow; i++) {
    rootE.insertAdjacentHTML("beforeend", rowData);
  }

  // 4.lépés: Add gombot root elemen kívül hozzáadni az oldalhoz (afterend)
  rootE.insertAdjacentHTML(
    "afterend",
    `<input type="button" value="Add" class="add" id="add">`
  );

  // 5.lépés: új hozzáadása click esemény-t hozáadni az add gomb-ra (id-t kell adni neki)
  // függvény hozzáadása click eseményre -> még egyszer hozzáadja a változót a root elemhez (azaz létrehoz még egy sort)
  function addNewItem() {
    rootE.insertAdjacentHTML("beforeend", rowData);
    //TODO: valahogy itt kéne rátenni az új elemre a törlés függvényt
  }

  document.getElementById("add").addEventListener("click", addNewItem);

  // 6.lépés: kijelöljük az összes törlés gombot egy változóba, ha valamelyikre kattintunk, akkor kitörli az adott sort.
  // for ciklus click esemény ahány elem van a tömbben
  // függvényben a törlés gomb befoglaló sorát kitöröljük
  let deleteBtns = rootE.querySelectorAll(".delete");
  function deleteItem(e) {
    //console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteItem);
  }
}

window.addEventListener("load", pageLoad);
