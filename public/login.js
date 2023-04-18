(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
      const nameEl = document.querySelector('#nameBox');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }

    if (authenticated) {
        document.querySelector('#playerName').textContent = userName;
        setDisplay('loginControls', 'none');
        setDisplay('playControls', 'block');
      } else {
        setDisplay('loginControls', 'block');
        setDisplay('playControls', 'none');
      }
})();