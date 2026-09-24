// // // const number = 2000;

// // // if (number < 10) {
// // //     console.log("satuan")
// // // } else if ("number < 100") {
// // //     console.log("puluhan")
// // // } else if ("number < 1000") {
// // //     console.log("ratusan")
// // // }
// // // else {
// // //     console.log("number")
// // // }

// const marvel = ["raya", "anugerah", "nafi", "wishal"];

// console.log(marvel.includes("wishal"));


// if (marvel.includes("wishal")) {
//     console.log("berarti dia anggota kelas")
// } else {
//     console.log("dia bukan anggota kelas")
// }

// marvel.push("abdul");

// console.log(marvel);

// // const person = {
// //     name: "muhammad fathin",
// //     Age: 15,
// //     isAdmin: false,
// //     book: {
// //         title: "parable",
// //         year: 2020,
// //         pages: 450,
// //         buah: ["manga", "apple", "banana"]
// //     }
// // };

// // console.log(person.name);
// // console.log(person.Age);
// // console.log(person.isAdmin);
// // console.log(person.book.title);
// // console.log(person.book.year);
// // console.log(person.book.pages);
// // console.log(person.book.buah[1]);

// // if (person.book.buah.includes("apple")) {
// //     console.log("apple merupakan data array dari buah")
// // } else {
// //     console.log("apple bukan merupakan data array dari buah")
// // }



// const x = 10;
// const y = 20;

// function add(variable1, variable2) {
//     const result = variable1 * variable2;
//     console.log(result);
// };

// add(x,y);

// const body = document.body;
// const card = document.getElementById("card");

// const avengers = ["spiderman"];

// avengers.map(function(user) {
//     card.innerHTML = user;
// });

// async function response() {
//     try {
//         const data = await (await fetch('https://dummyjson.com/products')).json()
//         console.log(data)

//         const dataFetchMap = data.products.map(function (item) {
//             return `
//             <div class="card">
//              <h2>${item.title}</h2>
//              <p>Harga: $${item.price}</p>
//              <p>Katagori: ${item.category}</p>
//              </div>
//              `
//         })
//         card.innerHTML = dataFetchMap.join("")
//     } catch {

//     }
// }

// const hasil = document.getElementById("hasil") //<div> </div>

// const objectPerson = () => {
//     const person = {
//         nama : "muhammad fathin",
//         umur : 15,
//         foto : "/images/mamah.png",
//         book : {
//             buah: ["mangga", "apple", "banana"]
//         } 
//     }
//     const text = `
//     <div>
//         <img src="${person.book.buah[2]}" alt="Foto ${person.nama}">
//         <h2>${person.nama}</h2>
//         <p>Umur: ${person.umur}</p>
//     </div>
//     `
//     hasil.innerHTML = text
    
// }

// objectPerson()


// // async function response() {
// //     try {
// //         const res = await fetch('https://dummyjson.com/carts')
// //         const data = await res.json();
// //         console.log(data);

// //         const dataFetchMap = data.carts[0].products.map(function (item) {
// //             return `
// //             <div class="card">
// //              <h2>${item.title}</h2>
// //              <p>Harga: $${item.price}</p>
// //              <p>Katagori: ${item.category}</p>
// //              </div>
// //              `;
// //         });
        
// //         const card = document.getElementById('card'); // Pastikan elemen dengan ID ini ada di HTML
// //         if (card) {
// //             card.innerHTML = dataFetchMap.join("");
// //         }
// //     } catch (error) {
// //         console.error('Terjadi kesalahan:', error);
// //     }
// // }

// // response();

// const result = document.getElementById("result");

// const getData = async () => {
//     const rest = await fetch('https://api.jikan.moe/v4/anime');
//     const data = await rest.json();

//     console.log(data)

//     const mapData = data.data.map(function (item) {
//         return `
//         <div class="card">
//          <img src="${item.images.jpg.image_url}" alt="${item.title}">
//         </div>
//         `
//     })
//     result.innerHTML = mapData.join('')
// }

// getData()

// const fristName = "muhammad fathin";
// const lastName = "fathin";
// const age = 15;
// const from = "bekasi, indonesia";
// const favoritefood = ["fried rice", "hamburger", "pizza"];
// const favoritedrink = ["water", "milk", "juice"];

// const isAdmin = true;

// const fullName = `hallo nama saya ${fristName} ${lastName} umur saya ${age} dan saya tinggal di ${from} dan makan faorite food saya adalah ${favoritefood} dan favorite drink is ${favoritedrink}`;

// console.log(fullName);

// const hasSim = true

// if (hasSim) {
//     console.log("berjalan")
// } else {
//     console.log("berhenti")
// }

// const nyalakanlampu = (condition, _condition2) => {
//     const lampu = document.getElementById("lamp") //img
//     const lampu2 = document.getElementById("spiider")
//     const lampu3 = document.getElementById("tanos")
    
//     if(condition == "on") {
//         if (_condition2 == 1) {
//             lampu.src = "images/on.gif"
//         } if (_condition2 == 2) {
//             lampu2.src = "images/on.gif"
//         } if (_condition2 ==3) {
//             lampu3.src = "images/on.gif"
//         }
//     }
//     if(condition == "off") {
//         if (_condition2 == 1) {
//             lampu.src = "images/off.gif"
//         } if (_condition2 == 2) {
//             lampu2.src = "images/off.gif"
//         } if (_condition2 == 3) {
//             lampu3.src = "images/off.gif"
//         }
//     }
// }

//  

// const username = document.getElementById("usernameInput")
// const passwordInput = document.getElementById("passwordInput")


// if (localStorage.getItem("user") == "admin") {
//     window.location.href="/html/admin.html"
//     window.location.href="/html/user html"
// } 


// const onLogin = () => {
//     localStorage.setItem("username", username.value);
//     if(username.value == "admin" && passwordInput.value == "admin123") {
//         window.location.href="/html/admin.html"
//     } else {
//         window.location.href="/html/user.html"
//     }
// }


// const logout = () => {
//     localStorage.clear(); //ini untuk menghapus semua data yang ada di local storage
//     location.reload(); //ini untuk merefresh halaman
//     window.location.href = "/script.html"; //ini di pindah halaman ke script.html
// }

// const body = document.body

// const  p2= document.createElement("div") //<p2> </p2>
// p2.textContent = "ini paragraf dari js" //<p2>ini paragraf dari js</p2>

// const p = document.createElement("p")
// p.innerHTML = "<marquee>ini tag dari js"

// console.log(p2)
// console.log(p)

// body.append(p)
// body.append(p2)

const siswa = {
    nama : "muhammad fathin",
    umur : "15",
    email : "papajahat@gmail.com"
}

console.log

console.log(person2)