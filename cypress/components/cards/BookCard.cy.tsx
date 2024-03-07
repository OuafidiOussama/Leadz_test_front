import BookCard from '../../../src/components/cards/BookCard';
import { Author } from '../../../src/types/author';
import {Book} from '../../../src/types/book'
import { BrowserRouter as Router } from 'react-router-dom';


describe('BookCard.tsx', ()=>{
    const author: Author = {
        id: 1,
        firstName: 'test',
        lastName: 'test',
        biography: "test-biography-some long paragraph",
        books: []
    }
    const book: Book = {
        id: 1,
        author: author,
        genre: "test-genre",
        publishedAt: new Date(),
        title: "test-title",
        description: "test-description-some Description for the Book",
        reviews: []
    }

    beforeEach(()=>{
        cy.mount(
            <Router>
                <BookCard book={book} />
            </Router>
        )
    })
    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="container"]').should('exist');
        cy.get('[data-cy="cover-container"]').should('exist');
        cy.get('[data-cy="cover"]').should('exist');
        cy.get('[data-cy="book-title"]').should('exist');
        cy.get('[data-cy="info-container"]').should('exist');
        cy.get('[data-cy="book-author"]').should('exist');
        cy.get('[data-cy="book-publicationDate"]').should('exist');
        cy.get('[data-cy="book-genre"]').should('exist');
    });

    it('should render The Book attributes correctly', () => {
        cy.get('[data-cy="cover"]').should('have.attr', 'src').should('not.be.empty')
        cy.get('[data-cy="book-title"]').should('contain.text', `${book.title}`);
        cy.get('[data-cy="book-author"]').should('contain.text', `${book.author.firstName} ${book.author.lastName}`);
        cy.get('[data-cy="book-genre"]').should('contain.text', `${book.genre}`);
    });

    it('should navigate to book details page', ()=>{
        cy.get('[data-cy="container"]').click();
        cy.url().should('include', `/books/${book.id}`);
    })
})