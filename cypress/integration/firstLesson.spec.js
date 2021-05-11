
let user;

describe('Your Second Test', () => {
    before(function () {
        cy.visit('https://react-redux.realworld.io/#/register?_k=97dzu3');
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
        cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password).should('have.value', user.password);
        cy.get('.btn').click();
    
        cy.get('.navbar').should('contain', user.username);
    })
  })
