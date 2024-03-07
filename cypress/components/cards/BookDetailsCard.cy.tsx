import BookDetailsCard from '../../../src/components/cards/BookDetailsCard'
import {Author} from '../../../src/types/author'
import { Book } from '../../../src/types/book'
import moment from 'moment'


describe('BookDetailsCard.tsx', ()=>{

    const author: Author = {
        id: 1,
        firstName: "test-firstName",
        lastName: "test-lastName",
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
            <BookDetailsCard book={book} />
        )
    })
    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="container"]').should('exist');
        cy.get('[data-cy="cover-container"]').should('exist');
        cy.get('[data-cy="cover"]').should('exist');
        cy.get('[data-cy="book-title"]').should('exist');
        cy.get('[data-cy="info-container"]').should('exist');
        cy.get('[data-cy="title-container"]').should('exist');
        cy.get('[data-cy="title-label"]').should('exist');
        cy.get('[data-cy="title-book"]').should('exist');
        cy.get('[data-cy="author-container"]').should('exist');
        cy.get('[data-cy="author-label"]').should('exist');
        cy.get('[data-cy="author-book"]').should('exist');
        cy.get('[data-cy="description-container"]').should('exist');
        cy.get('[data-cy="description-label"]').should('exist');
        cy.get('[data-cy="description-book"]').should('exist');
        cy.get('[data-cy="sup-container"]').should('exist');
        cy.get('[data-cy="publication-container"]').should('exist');
        cy.get('[data-cy="publication-label"]').should('exist');
        cy.get('[data-cy="publication-book"]').should('exist');
        cy.get('[data-cy="genre-container"]').should('exist');
        cy.get('[data-cy="genre-label"]').should('exist');
        cy.get('[data-cy="genre-book"]').should('exist');
      });

    it('should render book details correctly', () => {
        cy.get('[data-cy="cover"]').should('have.attr', 'src').should('not.be.empty')
        cy.get('[data-cy="title-book"]').should('contain.text', `${book.title}`);
        cy.get('[data-cy="author-book"]').should('contain.text', `${book.author.firstName} ${book.author.lastName}`);
        cy.get('[data-cy="description-book"]').should('contain.text', `${book.description}`);
        cy.get('[data-cy="publication-book"]').should('contain.text', `${moment(book.publishedAt).format('LL')}`);
        cy.get('[data-cy="genre-book"]').should('contain.text', `${book.genre}`);
    });

})