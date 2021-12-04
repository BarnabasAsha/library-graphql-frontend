
const Authors = ({ authors }) => {
    return (
        <div>
            <h2>Authors</h2>
            {
                authors.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>born</th>
                                <th>books</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authors.map(a => (
                                    <tr>
                                        <td>{a.name}</td>
                                        <td>{a.born}</td>
                                        <td>{a.bookCount}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : <p>No authors</p>
            }
        </div>
    )
}

export default Authors