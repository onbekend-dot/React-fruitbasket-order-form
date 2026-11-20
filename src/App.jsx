import '../App.css';
import FruitCard from './componenten/FruitCard';
function App() {


    return (
        <>

            <h1>Fruitmand bezorgservice</h1>
<section className="fruit-container">

            <FruitCard naam="Bananen"/>
            <FruitCard naam="appels"/>
            <FruitCard naam="aardbeien"/>
            <FruitCard naam="kiwi"/>
            <FruitCard naam="peren"/>

</section>


        </>
    );

}











export default App;
