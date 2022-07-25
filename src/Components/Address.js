const Address = ({address}) => {
    return (
        <div className="location">
            <p>{address.street}{address.suite}</p>
            <p>{address.city}</p>
            <p>{address.zipcode}</p>

        </div>

    )
}

export default Address