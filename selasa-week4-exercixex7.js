/**
 * regex
 * me-return string yang telah bersih dari berbagai simbol, 
 * hanya menyisakan a-z dan angka 0-9
 * /[^\w\s]/gi
 * As was mentioned in the comments 
 * it's easier to do this as a whitelist - replace the characters which aren't in your safelist.
 * The caret (^) character is the negation of the set [...], 
 * gi say global and case-insensitive 
    (the latter is a bit redundant but I wanted to mention it) 
    and the safelist in this example is digits, word characters, 
    underscores (\w) and whitespace (\s).
 */
function hapusSimbol(str) {
    // you can only write your code here!
    return str.replace(/[^\w\s]/gi,'')
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100