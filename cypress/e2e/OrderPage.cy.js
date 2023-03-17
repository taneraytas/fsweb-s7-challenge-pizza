describe("Sipariş Sayfanın Açılması", () => {
  it("Sipariş Sayfasının Açılması", () => {
    cy.visit("/siparis-sayfasi").contains("Hamur Seç");
    // cy.get("[data-test-id='cb1']");
  });
});
