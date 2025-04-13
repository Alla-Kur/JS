var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
  ];

  function findEmail(arr) {
    const pattern = /[A-Za-z0-9\.-_]+(@gmail|@yahoo)\.com/;
    const matches = [];
    for (let user of arr) {
        if (pattern.test(user.email)) {
            matches.push(user.email);
        }
    }
    return matches;
  }
  console.log(findEmail(arr));




