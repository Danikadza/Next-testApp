interface TagsProps {
    tags: string[];
}

const Tags = ({tags}: TagsProps) => {
    return (
        <div className="tags">
          {
            tags.map((tag) => {
                return(
                    <div key={tag} className="tags__tag">
                        {tag}
                    </div>
                )
            })
          }
        </div>
    )
}

export default Tags