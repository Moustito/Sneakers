export function displayMenu() {
document.getElementById('menu').addEventListener ("click", event => {
    document.getElementById('displayedMenu').style.display = "block";
  });
}

export function closeMenu() {
    document.getElementById('close').addEventListener ("click", event => {
        document.getElementById('displayedMenu').style.display = "none";
      });

    // document.getElementById('displayedMenu').addEventListener ("click", event => {
    //     document.getElementById('displayedMenu').style.display = "none";
    // });
}

export function add() {
    document.getElementById('add').addEventListener ("click", event => {
        console.log("add");
      });
}

export function del() {
    document.getElementById('del').addEventListener ("click", event => {
        console.log("del");
      });
}

export function addToCart() {
    document.getElementById('addToCart').addEventListener ("click", event => {
        console.log("addToCart");
      });
}
