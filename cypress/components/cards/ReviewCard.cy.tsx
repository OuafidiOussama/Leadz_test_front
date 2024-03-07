import ReviewCard from '../../../src/components/cards/ReviewCard'
import {Review} from '../../../src/types/review'
import {Book} from '../../../src/types/book'
import { Author } from '../../../src/types/author'
import moment from 'moment'


describe('ReviewCard.tsx', ()=>{
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
    const review: Review = {
        id: 1,
        fullName: 'test test',
        email: 'test@gmail.com',
        comment: 'Some comment about a book',
        creationDate: new Date(),
        book: book
    }

    beforeEach(()=>{
        cy.mount(
            <ReviewCard review={review} />
        )
    })
    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="container"]').should('exist');
        cy.get('[data-cy="image-container"]').should('exist');
        cy.get('[data-cy="image"]').should('exist');
        cy.get('[data-cy="info-container"]').should('exist');
        cy.get('[data-cy="details"]').should('exist');
        cy.get('[data-cy="full-name"]').should('exist');
        cy.get('[data-cy="email"]').should('exist');
        cy.get('[data-cy="comment"]').should('exist');
        cy.get('[data-cy="creationDate"]').should('exist');
    });

    it('should render author full name correctly', () => {
        cy.get('[data-cy="full-name"]').should('contain.text', `${review.fullName}`);
        cy.get('[data-cy="email"]').should('contain.text', `${review.email}`);
        cy.get('[data-cy="comment"]').should('contain.text', `${review.comment}`);
        cy.get('[data-cy="creationDate"]').should('contain.text', `${moment(review.creationDate).format('LL')}`);
    });
})