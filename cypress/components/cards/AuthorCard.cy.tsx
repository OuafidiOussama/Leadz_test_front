import AuthorCard from "../../../src/components/cards/AuthorCard"
import {Author} from '../../../src/types/author'
import { BrowserRouter as Router } from 'react-router-dom';


describe('AuthorCard.tsx', ()=>{
    const author: Author = {
        id: 1,
        firstName: "test",
        lastName: "test",
        biography: "test-biography- some long paragraph",
        books: []
    }

    beforeEach(()=>{
        cy.mount(
            <Router>
                <AuthorCard author={author} />
            </Router>
        )
    })
    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="container"]').should('exist');
        cy.get('[data-cy="image-container"]').should('exist');
        cy.get('[data-cy="image"]').should('exist');
        cy.get('[data-cy="bessal"]').should('exist');
        cy.get('[data-cy="text-container"]').should('exist');
        cy.get('[data-cy="full-name"]').should('exist');
    });

    it('should render author full name correctly', () => {
        cy.get('[data-cy="full-name"]').should('contain.text', `${author.firstName} ${author.lastName}`);
    });

    it('should navigate to author details page', ()=>{
        cy.get('[data-cy="container"]').click();
        cy.url().should('include', `/authors/${author.id}`);
    })
})