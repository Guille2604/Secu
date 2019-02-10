// Estas funciones se prueban por web antes de usarlas
// recomiendo https://repl.it/languages/nodejs
//
// Un loginCookie es encriptado de (username+" "+horaEnlaQueSeLogueoOk)
//
// 3 funciones se crean a partir de ahi
// getLoginCookie(username)
//     --> me va a dar el string q tengo q guardar en la cookie
//
// getUserNameFromLoginCookie(loginCookie)
//     --> le meto el loginCookie y me dice q usuario es
//
// isLoginCookieOk(userCookie,userName)
//     --> le meto el loginCookie y el userName q saque de la func
//         anterior y me da true o false
//
// esas son las funciones basicas, luego agrego las funciones resumidas
// 
// isLoginCookieOk(loginCookie)
//          ----> usa un solo parametro
//
// getFreshLoginCookie(loginCookie)
//         --> obtiene una cookie fresca a partir de la cookie actual
//
// El uso queda entonces asi:
//
// Despues del login correcto se graba el string q da getloginCookie(username)
//
// en toda la entrada de los metodos se pone
//
// if (!isLoginCookieOk1) {
//  ...redireccionar el usuario al login...
//  } else
//  registrar nueva cookie de fresh login cookoe
//  seguir con el programa
//  }
// testing... sacarle los encrypt para ver q hace
loginCookie         = getLoginCookie("pepe"); 
loginCookieExpirada = "pepe "+ (Date.now()-(1000*60*10));
console.log(loginCookieExpirada+ " -> cookie expirada a proposito");
console.log(loginCookie+" -> pepe xxxx (donde x es numero recontra largo)"); 
console.log(getUserNameFromLoginCookie(loginCookie)+"-> pepe");
console.log(isloginCookieOk1(loginCookie)+" -> true");
console.log(isloginCookieOk1(loginCookieExpirada)+" ->false");
//

function getLoginCookie(username)
{
    //var salida = encrypt(username+" "+Date.now());
    var salida = (username+" "+Date.now());
    return salida;
}

function getUserNameFromLoginCookie(loginCookie)
{
    lg = loginCookie;
    //lg = decrypt(loginCookie);

     return (lg.substring(0,lg.indexOf(' ')));
}

function isloginCookieOk(loginCookie,username)
{
    lg = loginCookie;
    //lg = decrypt(loginCookie);

  var coincideNombre = (lg.substring(0,username.length)==username);
  var limTiempo = parseInt(lg.substring(username.length),10)+(1000*60*5); // 5 min 
  var salida = true;
  if (!coincideNombre)   salida = false;
  if (Date.now()>limTiempo) salida = false;  
  return salida;
}

function isloginCookieOk1(loginCookie)
{
  return isloginCookieOk(loginCookie,getUserNameFromLoginCookie(loginCookie));

}

function getFreshLoginCookie(loginCookie)
{
    return getLoginCookie(getUserNameFromLoginCookie(loginCookie));
}

/////////////////////////////////fin modulo login ///////////////////////////////////////////////////

