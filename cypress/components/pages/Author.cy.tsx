import { Provider } from 'react-redux';
import {store} from '../../../src/redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Author from '../../../src/components/pages/Author';

describe('Author', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://127.0.0.1:8000/api/authors', { fixture: 'authors.json' }).as('getAuthors');
        cy.mount(
            <Provider store={store}>
                <Router>
                    <Author />
                </Router>
            </Provider>
        );
    });

    it('should render correctly with loading state', () => {
        cy.contains('Authors').should('exist');
        cy.get('[data-cy="heading"]').should('exist').contains('Authors');
        cy.get('[data-cy="search-input"]').should('exist');
        cy.get('[data-cy="loading"]').should('exist'); 
    });

    it('should render AuthorsContainer with authors list', () => {
        cy.wait('@getAuthors');
        cy.get('[data-cy="authors-container"]').should('exist');
        cy.get('[data-cy="container"]').should('have.length.gt', 0);
    });
});
