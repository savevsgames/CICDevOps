import 'cypress-wait-until';

describe('template spec', () => {
  it('passes', () => {
    cy.waitUntil(() =>
      cy
        .request('https://cicdevops.onrender.com/')
        .then((response) => response.status === 200)
    );

    cy.visit('https://cicdevops.onrender.com/');
  });
});
