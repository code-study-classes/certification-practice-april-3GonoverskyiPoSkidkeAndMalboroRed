const x = 'one, ONE, One, two, Three, tWo, FOUR, Five, Five, fivE';
const convertToObj = (sentence) => {
  const words = sentence.toLowerCase().trim().split(', ');
  const result = words.reduce((obj, word) => {
    obj[word] = (obj[word] ?? 0) + 1;
    return obj;
  }, {});
  return result;
};
console.log(JSON.stringify(convertToObj(x), null, ' '));

const y = convertToObj(x);

console.log(Object.keys(y));
console.log(Object.values(y));
console.log(Object.entries(y));
for (const key in y) {
  console.log(key, y[key]);
}

const pick = (obj, keys) => {
  const pickem = keys.reduce((objAcc, key) => {
    if (Object.hasOwn(obj, key)) {
      objAcc[key] = obj[key];
    }
    return objAcc;
  }, {});
  return pickem;
};

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'Linux',
};
console.log(pick(data, ['user', 'os']));

// из объекта извлечь  значение по указанной цепочке ключей, если такого значения нет, вернуть def
const get = (obj, keys, defaultValue = null) => {
  const keyArray = Array.isArray(keys) ? keys : keys.split('.');
  let value = obj;

  
  for (const key of keyArray) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
};

const data2 = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

console.log(get(data2, ['hosts', 1, 'name'])); // Output: web2
console.log(get(data2, ['hosts', 1, 'null'])); // Output: 3
console.log(get(data2, ['hosts', 1, 'active'])); // Output: false
console.log(get(data2, ['hosts', 2, 'name'], 'Default Value')); // Output: Default Value


//слияние словарей 
const user1 = {
  name: 'Pasha',
  email: 'example@mail.com',
}

const user2 = {
  name: 'Pavel',
  age: 10,
}

user1.name = user2.name;
user1.age = user2.age;
console.log(user1)
console.log(Object.assign(user1, user2));
const x2 = {...user1, age: 15, ...user2, age:60, surname: 'Pozdnyakov'}
console.log(x2);

// вход-объект, список ключей для замены, обьект с данными для замены, выход - изменённый объект
const company = {
  name: null,
  state: 'moderating',
}
const toUpdate = {
  name: 'ГИперборея',
  director: 'Pasha',
  age: 15,
}

const fill = (obj, keys, data) => {
  const result = { ...obj };
  keys.forEach(key => {
    if (data.hasOwnProperty(key)) {
      result[key] = data[key];
    }
  });
  return result;
}
console.log('                                                                                               ')
console.log(fill(company, ['name'],  toUpdate)) // {name: 'company', state: ''moderating}


// прецельная диструктуризация 
const a = [1, 2, 3];
const [name, name2] = a;

const objArray = [
  {name: 'x', age: 17},
  {name: 'y', age: 18},

  {name: 'z', age: 19},
]
const names =  objArray.map(({name})=> name );
console.log(names); 
