# Zadání

Odkazy na užitečné dokumentace:

- [uuApp Server Project (NodeJs)](https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-2590bf997d264d959b9d6a88ee1d0ff5/book/page?code=uuAppStyleGuide_00)
- [uuApp Client Project (UU5)](https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-e884539c8511447a977c7ff070e7f2cf/book/page?code=89628511)

# 0. Příprava projektu

## 0.1 Nástroje

- [Git](https://git-scm.com/)
Stáhnout a nainstalovat.
- Nastavit informace o uživateli: 
```git
git config --global user.name "Jmeno Prijmeni"
git config --global user.email "Email"
```
- [MongoDB](https://www.mongodb.com/download-center/community)
Stáhnout a nainstalovat MongoDB.
- Na disku, kam se nainstalovalo MongoDB, vytvořit složky data/db:
```cmd
C:\ md data
```
```cmd
C:\ cd data
```
```cmd
C:\data md db
```

- Spustit MongoDB. V složce MongoDB\Server\<verze MongoDB>\bin
```cmd
mongod
```

- Stáhnout a naistalovat si GUI pro zobrazení dát v databáze např. [Robo 3T](https://robomongo.org/).

- Stáhnout a nainstalovat REST client, např. [Insomnia](https://insomnia.rest/download/).

## 0.2 Repozitář

Pomocí nástroje git příkazem clone převzít repozitář:
```git
git clone https://github.com/SWFA1/test_cities_maing01.git
```

Vytvořit si vlastní větev. Pojmenovat podle následující konvence (např. candidate/vonasek.frantisek):
```git
git checkout -b candidate/<prijmeni.jmeno>
```

Pushnout svoji novou větev "cadidate/<prijmeni.jmeno>":
```git
git push https://github.com/SWFA1/test_cities_maing01.git
```
Přihlásit se jako:
U: CandidateSWFA1
P: Candidate#A1

## 0.3 Klient
```cmd
cd test_cities_maing01-client
```
```npm
npm config set registry https://repo.plus4u.net/repository/npm/
```
```npm
npm install
```
```npm
npm start
```

## 0.4 Server
```cmd
cd test_cities_maing01-server
```
```npm
npm config set registry https://repo.plus4u.net/repository/npm/
```
```npm
npm install
```
```npm
npm start
```

## 0.5 Inicializace projektu

Pomocí REST klienta spustit následující requesty:
```http request
http://localhost:8080/test-cities-maing01/00000000000000000000000000000000-11111111111111111111111111111111/sys/initApp
dtoIn = { 
  "runtimeMode": {
    "mode": "standard"   
  }
}
```
*[Chyba: Asid has been already initialized.](#Aplikace-je-již-inicializovaná)

```http request
http://localhost:8080/test-cities-maing01/00000000000000000000000000000000-11111111111111111111111111111111/sys/initAppWorkspace
dtoIn = {
  "awid": "22222222222222222222222222222222",                            
  "awidOwner": "0-0",                       
  "licenseOwner": {                         
    "organization": {                       
      "name": "Test",                        
      "oId": "12345",                         
      "web": "http://example.org"                       
    },
    "userList": [                          
      {
        "uuIdentity": "0-0",               
        "name": "awidOwner"                       
      }
    ]
  },
  "runtimeMode": { 
    "mode": "standard"       
  }
}
```
```http request
http://localhost:8080/test-cities-maing01/00000000000000000000000000000000-22222222222222222222222222222222/init
dtoIn = {}
```
*[Chyba: This UC can not be run in the current runtime mode of the application.](#Aplikace-je-v-privilegovaném-módu-a-nejde-ji-již-cez-request-sys/InitApp-nastavit-do-standardního-módu)

# 1. Zadání - Server

Tématem zadání je malá aplikace sloužící k hodnocení měst jejich návštěvníky. Uživatel má možnost zadat vlastní hodnocení města a také si zobrazit seznam měst s jejich hodnocením. Pro přidání hodnocení je připravena funkce addGrade, pro výpis měst pak listCities.  

## 1.1 Dokončit implementaci funkce listCities
app/models/city-model.js

Pro funkci modelu listCities je potřeba doplnit určitou část kódu tak, aby správně fungovala. 
Funkce by měla vracet získaný seznam měst. Struktura výstupu pro request listCities by měla vypadat následovně:
```json
{
   "itemList": [
      {
         "name": "Prague",
         "population": 1200000,
         "country": "Czech Republic",
         "awid": "22222222222222222222222222222222",
         "grades": [],
         "averageGrade": 0,
         "sys": {
            "cts": "2019-01-26T22:46:43.651Z",
            "mts": "2019-01-26T22:46:43.651Z",
            "rev": 0
         },
         "id": "5c9aabd33cc0fa0ab08e603f"
      }
   ],
   "pageInfo": {
      "pageIndex": 0,
      "pageSize": 1000,
      "total": 1
   },
   "uuAppErrorMap": {}
}
```

**Po dokončení provést git commit:**
```git
git commit -m "T1.1 listCities"
```

## 1.2 Opravit implementaci funkce addGrade
app/models/grade-model.js

Funkce modelu addGrade je kompletně implementovaná, avšak obsahuje drobnou chybu. Je potřeba chybu nalézt a opravit tak, aby bylo při volání requestu addGrade správně doplněno nové hodnocení. 
Výstup z opraveného requestu by měl vypadat následovně:
```json
{
   "name": "Prague",
   "population": 1200000,
   "country": "Czech Republic",
   "awid": "22222222222222222222222222222222",
   "grades": [
      {
         "grade": "B",
         "dateOfCreation": "2019-02-26T23:43:44.099Z"
      },
      {
         "grade": "C",
         "dateOfCreation": "2019-01-26T23:45:52.998Z"
      }
   ],
   "averageGrade": 0,
   "sys": {
      "cts": "2019-01-26T22:46:43.651Z",
      "mts": "2019-02-26T23:45:52.999Z",
      "rev": 3
   },
   "id": "5c9aabd33cc0fa0ab08e603f",
   "uuAppErrorMap": {}
}
```

**Po dokončení provést git commit:**
```git
git commit -m "T1.2 addGrade"
```

## 1.3 Dokončit implementaci funkce refreshAverageGrade
app/models/grade-model.js

V této úloze je potřeba napsat algoritmus, který provede výpočet hodnocení konkrétního města na základě jednotlivých známek od uživatelů. Výsledné hodnocení je aritmetický průměr všech známek, nicméně jednotlivé známky musí před samotným výpočtem upraveny podle níže uvedených pravidel.

Aplikace se snaží vypočítat hodnocení tak, aby bylo co nejvíce vypovídající. Proto se snaží zamezit uživatelům opakovaně za krátký časový úsek odesílat hodnocení konkrétního města, aby nedocházelo ke zkreslení výsledku. Pokud k násobnému odeslání dojde, aplikace redukuje záznam o hodnocení na jednu známku a penalizuje uživatele tím, že jeho hodnocení sníží na polovinu.
Dále upravuje hodnocení podle toho, zda je období před výplatou nebo po výplatě. Podle zkušeností product ownera této aplikace uživatelé hodnotí města hůře v několika málo dnech před výplatou, neboť jim dochází peníze a nemohou si dovolit platit za atrakce a zajímavosti, které město poskytuje. Naopak ve dnech krátce po výplatě uživatelé hodnotí až příliš pozitivně, neboť se jim svět zdá mnohem růžovější.
A nakonec snižuje známku starým hodnocením, neboť již ztrácí na aktuálnosti.

Funkce refreshAverageGrade je připravená, neobsahuje však hlavní logiku, sekce HDS4, kterou je potřeba doplnit.
1. Převést hodnocení na číselné hodnoty E=2.0 D=4.0 C=6.0 B=8.0 A=10.0
2. Filtrace násobných hodnocení. Všechna hodnocení které byly vytvořeny s rozdílem do 60 sekund se zredukují na 1 hodnocení.
    1. Hodnocení bude mít hodnotu poloviny aritmetického průměru násobných hodnocení.
    2. Hodnocení si ponechá čas vytvoření prvního hodnocení.
3. Zpracovat úpravu hodnocení na základě času vytvoření hodnocení:
    1. Pokud bylo hodnocení vytvořeno v dnech měsíce 15,16 snížit hodnocení (grade - 1)
    2. Pokud bylo hodnocení vytvořeno v dnech měsíce 11,12,13,14 navýšit hodnocení (grade + 1)
    3. Všechna hodnocení, která jsou starší než 30 dnů, upravit hodnocení (grade * 0.9)
    4. Všechna hodnocení, která jsou starší než 90 dnů, upravit hodnocení (grade * 0.75)
4. Celkové hodnocení je aritmetickým průměrem upravených hodnocení na základe pravidel 1-3.  

**Po dokončení provést git commit:**
```git
git commit -m "T1.3 refreshAverageGrade"
```

# 2. Zadání - Klient

Webová aplikace je dostupná na adrese:
```http request
http://localhost:8080/test-cities-maing01/00000000000000000000000000000000-22222222222222222222222222222222/
```
## 2.1 Doplnit CSS styl - flex
src/bricks/city-tile.less
- Doplnit CSS s využitím flex boxů. Zabezpečit, aby se "value" zobrazovala od pravého okraje a "label" zabíral 40% šířky rodiče.

**Po dokončení provést git commit:**
```git
git commit -m "T2.1 CSS styl - flex"
```

## 2.2 Implementovat funkčnost výpisu všech hodnocení, komponenta city-detail
src/bricks/city-detail.js
- K zobrazení využít uu5 komponenty [UU5.Bricks.Row](https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-ed11ec379073476db0aa295ad6c00178/book/page?code=uu5BricksRow) a [UU5.Bricks.Column](https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-ed11ec379073476db0aa295ad6c00178/book/page?code=uu5BricksColumn).
- UU5.Bricks.Column nastavit propsu colWidth={{m: 4, l: 3, xl: 2}}
- Pro každé hodnocení nastavit přichystanou CSS třídu gradeA,... (nutnost získat CSS třídu pomocí funkce [this.getClassName("gradeA")](https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-ed11ec379073476db0aa295ad6c00178/book/page?code=uu5CommonBaseMixin))
- Při hodnocení zobrazit také čas vytvoření hodnocení.
- Všechna hodnocení seřadit sestupně podle písmen.

**Po dokončení provést git commit:**
```git
git commit -m "T2.2 city-detail"
```

# Odevzdat řešení
**Po dokončení**
```git
git push
```

# Časté problémy

#### Aplikace je již inicializovaná
Pokud je odpověď serveru: "Asid has been already initialized." neni již potřeba spouštet request.

#### Aplikace je v privilegovaném módu a nejde ji již cez request sys/InitApp nastavit do standardního módu
Pro účely přepnutí módu aplikace existuje request sys/setAppRuntimeMode

```http request
http://localhost:8080/test-cities-maing01/00000000000000000000000000000000-11111111111111111111111111111111/sys/setAppRuntimeMode
dtoIn = { 
  { 
     "mode": "standard"   
  }
}
```
