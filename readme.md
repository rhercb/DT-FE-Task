## Šis ir mock .json serveris kurā glabājās dati priekš API pieprasījuma

### Kā uzinstalēt

```
1. git clone
2. npm install
3. npm run start
4. http://localhost:5555/characters
```

### Pieejamās komandas datiem

___

#### GET

```
/characters - Iegūs pilno sarakstu ar datiem
/characters/1 - Iegūs no saraksta ierakstu ar ID: 1
```

#### Paginate

```
/characters?_page=7 - Iegūs ierakstus no 7. lapas (Default ierakstu skaits - 10)
/characters?_page=7&_limit=20 - Iegūs 20 ierakstus no 7. lapas
```

#### Filter/Search

```
/characters?q=homer - Iegūs visus ierakstus kur name vai url saturēs vārdu 'homer'
/characters?name_like=homer - Iegūs visus ierakstus kur name satur vārdu 'homer'
```

#### Citas komandas pieejamas [šeit](https://github.com/typicode/json-server)
