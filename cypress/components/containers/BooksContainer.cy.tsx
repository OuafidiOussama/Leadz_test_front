
import { BrowserRouter as Router } from 'react-router-dom';
import { Book } from '../../../src/types/book';
import BooksContainer from '../../../src/components/containers/BooksContainer';
import { Author } from '../../../src/types/author';


describe('AuthorsContainer', () => {
    const author: Author = {
        id: 1,
        firstName: 'test',
        lastName: 'test',
        biography: "test-biography-some long paragraph",
        books: []
    }

    const booksWithContent: Book[] = [
        {
            id: 1,
            author: author,
            genre: "test-genre1",
            publishedAt: new Date(),
            title: "test-title1",
            description: "test-description-some Description for the Book",
            reviews: []
        },
        {
            id: 2,
            author: author,
            genre: "test-genre2",
            publishedAt: new Date(),
            title: "test-title2",
            description: "test-description-some other Description for the Book",
            reviews: []
        }
    ];

    const booksWithNoContent: Book[] = [];

    it('should render books when books exist', () => {
        cy.mount(
            <Router>
                <BooksContainer books={booksWithContent} />
            </Router>
        );
            
        cy.get('[data-cy="container"]').should('have.length', booksWithContent.length);
    });

    it('should render message when there are no books', () => {
        cy.mount(
            <Router>
                <BooksContainer books={booksWithNoContent} />
            </Router>
        );

        cy.get('[data-cy="message"]').should('exist').should('contain.text', 'There is no Books Yet!')
        cy.get('[data-cy="no-books-icon"]').should('exist');
    });
});
