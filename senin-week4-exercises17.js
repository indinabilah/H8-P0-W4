/**
 * function kaliTerusRekursif(angka)
 * 3 -> 3
 * 24 -> 2*4 =8
 * 654 -> 6*5*4 = 120
 *  1*2*0 = 0
 * 66
 * 66%10 = 6
 * 6%10 = 6
 * rekursif hingga hasil digit bernilai hanya satu digit
 */

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka ===  0){
        return 1
    }else{
        n = (angka%10) * kaliTerusRekursif(Math.floor(angka/10))
        a =  n%10 * kaliTerusRekursif(Math.floor(n/10)) 
        return a%10 * kaliTerusRekursif(Math.floor(a/10))
    }

    // return Math.floor(angka/10)
    
  }
  
  // TEST CASES
//   console.log(kaliTerusRekursif(666)); // 8
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6

/**
 * 
 */