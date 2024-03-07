import { Provider } from 'react-redux';
import {store} from '../../../src/redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Book from '../../../src/components/pages/Book';

describe('Author', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://127.0.0.1:8000/api/books', { fixture: 'books.json' }).as('getBooks');
        cy.mount(
            <Provider store={store}>
                <Router>
                    <Book />
                </Router>
            </Provider>
        );
    });

    it('should render correctly with loading state', () => {
        cy.contains('Book').should('exist');
        cy.get('[data-cy="heading"]').should('exist').contains('Books');
        cy.get('[data-cy="search-input"]').should('exist');
        cy.get('[data-cy="loading"]').should('exist'); 
    });

    it('should render AuthorsContainer with authors list', () => {
        cy.wait('@getBooks');
        cy.get('[data-cy="books-container"]').should('exist');
        cy.get('[data-cy="container"]').should('have.length.gt', 0);
    });
});
