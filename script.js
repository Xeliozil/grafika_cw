function Hello(name)
{
    console.log("Hello, " + name);
}

function Suma(a, b)
{
    return a + b;
}

function Silnia_I(n)
{
    wynik = 1;
    for (k = 1; k <= n; ++k)
    {
        wynik *= k;
    }
    return wynik;
}

const users = [
    {id: 1, name: "Jan", age: 25},
    {id: 2, name: "Adam", age: 26},
    {id: 3, name: "Grzegorz", age: 27}
];
function WylistowanieOsob(){
    n=users.length;
    i=0;
    while (i<n){
        console.log(users[i].id);
        console.log(users[i].name);
        console.log(users[i].age);
        i++;
    }
}