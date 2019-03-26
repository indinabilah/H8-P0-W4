/**
 *  me-return jumlah berapa kali ditemukan kata "abc" 
 * secara berturut-turut di dalam kalimat tersebut
 */
function cariPelaku(str) {
    // you can only write your code here!
    // var strCheck = /^[^abc]/g;
    // var pelaku = 0
    // for(i = 0; i<str.length; i++){
    //     if(strCheck.test(str)){
    //         pelaku += 1
    //     }
    // }
    var a = str.match(/abc/gi)
    return a.length
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2