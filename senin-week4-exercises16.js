/**
 * function totalDigitRekursif(angka)
 * nilai total dari digit tersebut
 * 
 * WAJIB REKURSIF!
 * 512
 * 512 % 10 = 2<
 * 512 / 10 = 51,2
 * 51%10 = 1<
 * 51/10 = 5,1
 * 5%10 = 5<
 */

function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka === 0){
        return 0
    }else{
        return angka%10 + totalDigitRekursif(Math.floor(angka/10))
    }
  }

  //100 1000 10000 1000000000
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5