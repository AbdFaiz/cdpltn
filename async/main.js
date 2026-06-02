function a() {
    console.log("Fungsi A");
    b();
}

function b() {
    console.log("Fungsi B");
}

a();

const kali = (x, y) => x * y;
const kuadrat = (x) => kali(x, x);
const pythagoras = (a, b, c) => (
    kuadrat(a) + kuadrat(b) == kuadrat(c)
)

console.log(pythagoras(3, 4, 5));
