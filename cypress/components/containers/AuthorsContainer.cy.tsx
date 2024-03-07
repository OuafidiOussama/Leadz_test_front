
import { BrowserRouter as Router } from 'react-router-dom';
import { Author } from '../../../src/types/author';
import AuthorsContainer from '../../../src/components/containers/AuthorsContainer';


describe('AuthorsContainer', () => {
    const authorsWithContent: Author[] = [
        {
            id: 1,
            firstName: 'tes1',
            lastName: 'test1',
            biography: 'Some long paragraph',
            books: []
        },
        {
            id: 2,
            firstName: 'test2',
            lastName: 'test2',
            biography: 'Another long paragraph',
            books: []
        }
    ];

    const authorsWithNoContent: Author[] = [];

    it('should render authors when authors exist', () => {
        cy.mount(
            <Router>
                <AuthorsContainer authors={authorsWithContent} />
            </Router>
        );
            
        cy.get('[data-cy="container"]').should('have.length', authorsWithContent.length);
    });

    it('should render message when there are no authors', () => {
        cy.mount(
            <Router>
                <AuthorsContainer authors={authorsWithNoContent} />
            </Router>
        );

        cy.get('[data-cy="message"]').should('exist').should('contain.text', 'There is No authors in the plateform Yet! Please Come Back Again')
        cy.get('[data-cy="no-authors-icon"]').should('exist');
    });
});
