
const Books = ({ books }) => {
    return (
        <div>
            <h2>Books</h2>
            {
                books.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Author</th>
                                <th>Published Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(b => (
                                    <tr key={b.id}>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.published}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : <p>No books</p>
            }
        </div>
    )
}

export default Books