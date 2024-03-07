import AuthorDetailsCard from "../../../src/components/cards/AuthorDetailsCard"
import {Author} from '../../../src/types/author'


describe('AuthorDetailsCard.tsx', ()=>{

    const author: Author = {
        id: 1,
        firstName: "test-firstName",
        lastName: "test-lastName",
        biography: "test-biography- some long paragraph",
        books: []
    }

    beforeEach(()=>{
        cy.mount(
            <AuthorDetailsCard author={author} />
        )
    })
    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="container"]').should('exist');
        cy.get('[data-cy="image-container"]').should('exist');
        cy.get('[data-cy="image"]').should('exist');
        cy.get('[data-cy="full-name"]').should('exist');
        cy.get('[data-cy="biography-container"]').should('exist');
        cy.get('[data-cy="biography"]').should('exist');
    });

    it('should render author details correctly', () => {
        cy.get('[data-cy="full-name"]').should('contain.text', `${author.firstName} ${author.lastName}`);
        cy.get('[data-cy="biography"]').should('contain.text', `${author.biography}`);
    });

})