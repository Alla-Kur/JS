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

    for (let user of arr) {
        return user.email;
    }
    return null;
    const pattern = /[A-Za-z0-9.-_]+(@gmail|@yahoo)\.com/g;
    const matches = user.email.match(pattern);
  }
  console.log(findEmail(arr));




  // const str = "test.test@gmail.com dmitro.porohov@yahoo.com andrii@mail.ru"
// const pattern = /[A-Za-z0-9.-_]+(@gmail|@yahoo)\.com/g;
// const matches = str.match(pattern);
// console.log(matches);