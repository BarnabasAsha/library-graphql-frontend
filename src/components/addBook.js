import useField from "../customHooks/useField"

const AddBook = () => {
    const [title, setTitle, titleType] = useField('text')
    const [published, setPublished, publishedType] = useField('text')
    const [author, setAuthor, authorType] = useField('text')


    return (
        <div>
            <input type={titleType} onChange={setTitle} value={title} placeholder="Title" name="title" />
            <br />
            <input type={authorType} onChange={setAuthor} value={author} placeholder="Author" name="author" />
            <br />
            <input type={publishedType} onChange={setPublished} value={published}  placeholder="Published" name="published" />
            <br />
        </div>
    )
}

export default AddBook