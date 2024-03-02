import { Author } from "../../types/author";
import AuthorCard from "../cards/AuthorCard";

interface Props {
  authors: Author[]
}

export default function AuthorsContainer({authors}: Props) {
  return (
    <div className="w-full py-5 flex justify-center flex-wrap gap-5">
        {authors.map(author=><AuthorCard author={author} key={author.id} />)}
    </div>
  )
}
