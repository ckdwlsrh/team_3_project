function editProfile() {
  let newName = prompt(
    '새 이름을 입력하세요:',
    document.getElementById('name').innerText
  );
  let newEmail = prompt(
    '새 이메일을 입력하세요:',
    document.getElementById('email').innerText
  );
  let nick = prompt(
    '새 닉네임을 입력하세요:',
    document.getElementById('nick').innerText
  );
  let newAddress = prompt(
    '새 주소를 입력하세요:',
    document.getElementById('address').innerText
  );

  if (newName) document.getElementById('name').innerText = newName;
  if (newEmail) document.getElementById('email').innerText = newEmail;
  if (newNick) document.getElementById('nick').innerText = newNick;
  if (newAddress) document.getElementById('address').innerText = newAddress;
}

