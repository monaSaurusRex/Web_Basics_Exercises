function getUserData(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let proLang = document.getElementById("proLang")
    // let province = document.getElementById("province").value;

    console.log(`
              First Name: ${fname}
               Last Name: ${lname}
                   Email: ${email}
    Programming Language: ${proLang}
        
    `)

}