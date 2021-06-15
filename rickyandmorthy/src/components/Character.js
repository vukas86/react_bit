

const Character = ({ data }) => {

    return (
        <div className="single-character">
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <button>Like</button>
        </div>
    )

}

export { Character };