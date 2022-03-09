function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
};


function calcHash(){
  let input = document.getElementById('username').value;
  console.log(input)
  return hash(`${input}`).then((hex) => {
    console.log(hex);
    const div = document.querySelector('div');
    div.innerHTML = hex;
  });
};
