
 let button = document.getElementById('check');
 let resultDiv = document.getElementById('result');
 button.addEventListener("click", remove);

 function remove(){
    event.preventDefault();

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  }
  
  let array = document.getElementById('num').value.split(' ');

  const uniqueArray = removeDuplicates(array);

  resultDiv.innerHTML = `Without Duplate is: ${uniqueArray}`;


}
