document.addEventListener("DOMContentLoaded", bindButtons);
const apiKey = ""
const pKey = ""

const searchHero = () => {
    const number = event.timestamp;
    const req = new XMLHttpRequest();
    const website = "http://gateway.marvel.com/v1/public/characters?name= "
    const name = document.getElementById('heroName').value;
    var web = website + name + `ts=` + number + `&apikey` + apiKey + `&hash=` + pKey;

    document.getElementById('submit').addEventListener('click', function (event) {

    }
    )

}

/* const App = (props) => {
    const apiKey = "9c6dade59f9d212b0bda7a54ef6e0a7e";
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                setHeroes(data.data.results);
            });
    }, []); */