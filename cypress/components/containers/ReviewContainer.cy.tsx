
import { BrowserRouter as Router } from 'react-router-dom';
import { Book } from '../../../src/types/book';
import { Author } from '../../../src/types/author';
import { Review } from '../../../src/types/review';
import ReviewsContainer from '../../../src/components/containers/ReviewsContainer';


describe('AuthorsContainer', () => {
    const author: Author = {
        id: 1,
        firstName: 'test',
        lastName: 'test',
        biography: "test-biography-some long paragraph",
        books: []
    }
    const book: Book = {
        id: 1,
        title: 'test',
        genre: 'test',
        author: author,
        publishedAt: new Date(),
        description: 'some description Description',
    }

    const reviewsWithContent: Review[] = [
        {
            id: 1,
            fullName: 'Test test1',
            comment: 'some Comment',
            email: 'test1@gmail.com',
            creationDate: new Date(),
            book: book
        },
        {
            id: 2,
            fullName: 'Test test2',
            comment: 'some other Comment',
            email: 'test2@gmail.com',
            creationDate: new Date(),
            book: book
        }
    ];

    const reviewsWithNoContent: Review[] = [];

    it('should render books when books exist', () => {
        cy.mount(
            <Router>
                <ReviewsContainer reviews={reviewsWithContent} />
            </Router>
        );
            
        cy.get('[data-cy="container"]').should('have.length', reviewsWithContent.length);
    });

    it('should render message when there are no books', () => {
        cy.mount(
            <Router>
                <ReviewsContainer reviews={reviewsWithNoContent} />
            </Router>
        );

        cy.get('[data-cy="message"]').should('exist').should('contain.text', 'This Book has no Reviews')
        cy.get('[data-cy="no-reviews-icon"]').should('exist');
    });
});
