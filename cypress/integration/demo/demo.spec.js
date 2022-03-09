/// <reference types="cypress" />

context('Demo', () => {

  var username = "hb@corebit.tech";
  var password = "123Qwe..";

  beforeEach(() => {
    cy.visit('https://devcdn.addpace.com/login')
    cy.wait(1 * 1000)   // 1 saniye beklet
    cy.get('[formcontrolname="email"]').type(username).should("have.value",username);
    cy.get('[formcontrolname="password"]').type(password).should("not.be.null");
    cy.get('.btn').click();

    cy.url().should('eq',"https://devcdn.addpace.com/agency/user/profile")
  })

  it('Cross işlemleri için firma seçme testi', () => {  
    cy.get('.selected-circle').click()     //hb firma seçimi
    cy.get('[tabindex="3"] > .image-container > .image-text').click()
    cy.get('[style="margin-left: -2px;"] > .nav-link').click()
  })

})
