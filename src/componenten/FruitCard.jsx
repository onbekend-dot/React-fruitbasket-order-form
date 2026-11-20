import Counter from './Counter';






function FruitCard({ naam }) {
    return (
        <article>
            <h2>{naam}</h2>
            <Counter />
        </article>
    );
}
export default FruitCard;
