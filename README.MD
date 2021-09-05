## Technical Test Bibit

### 1. Query Sql

```sql
SELECT s.ID, s.UserName, p.UserName as 'ParentName' FROM Users s
LEFT JOIN Users p ON p.ID = s.Parent
```

### 2. Api Movies

Before installation makesure you have to configure enviroment in file .env

#### Installation

```bash
# install dependencies
$ npm install

# running migration
$ npm run sequelize db:migration

# running application
$ npm start
```

#### Installation with docker

Makesure you have to install docker

```bash
# running application with docker compose
$ docker-compose up
```

### 3. Improve Logic

```javascript
function findFirstStringInBracket(str) {
  const indexFirstBracketFound = str.indexOf('(');
  if (indexFirstBracketFound < 0) {
    return '';
  }
  const indexClosingBracketFound = str.indexOf(')');
  if (indexClosingBracketFound < 0) {
    return '';
  }

  return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound);
}
```

### 4. Function Anagram

```javascript
function findAnagram(param) {
  const result = {};
  for (const d in param) {
    const sortWord = param[d].split('').sort().join();
    if (result[sortWord]) {
      result[sortWord] = [...result[sortWord], param[d]];
    } else {
      result[sortWord] = [param[d]];
    }
  }
  return Object.values(result);
}
```
