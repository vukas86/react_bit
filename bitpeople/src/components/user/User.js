const User = ({ data }) => {
    return (
        <ul>
            <li>

                <p>{data.name}</p>
                <p className="email">{data.email}</p>
                <p className="email">{data.dob}</p>

            </li>
        </ul>
    )
}

export { User }