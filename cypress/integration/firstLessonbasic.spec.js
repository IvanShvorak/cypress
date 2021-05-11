it('Opportunity to Sign Up', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=97dzu3');
    cy.get(':nth-child(1) > .form-control').type('Robin1234Hood1215').should('have.value', 'Robin1234Hood1215');
    cy.get(':nth-child(2) > .form-control').type('r1obin2121215@i.ua').should('have.value', 'r1obin2121215@i.ua');
    cy.get(':nth-child(3) > .form-control').type('Qwerty!1215').should('have.value', 'Qwerty!1215');
    cy.get('.btn').click();

    cy.get('.navbar').should('contain', 'Robin1234Hood1215');
});
