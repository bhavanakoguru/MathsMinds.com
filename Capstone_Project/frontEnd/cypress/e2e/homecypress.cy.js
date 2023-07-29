describe("erifying web pages",()=>{
    it("veifying content in the home page",()=>{
        cy.visit("/home")
        cy.wait(5000)

        cy.get(`.logo`).should("exist")
        cy.get(`.livebook`).eq(0).should("exist")
        cy.get(`.livebook`).eq(1).should("exist")
        cy.get(`.profile`).should("exist")
        cy.get(`.textmove>h1`).should("contain","Learn the ways of the future")
        cy.get(`.textmove>p`).should("contain","Mathematical learningskills")
        cy.get(`.liveHeros>img`).should("exist")
        cy.get(`.subjects>div`).eq(0).should("contain","Mathematics")
        cy.get(`.subjects>div`).eq(1).should("contain","Importance of Mathematics")
        cy.get(`.subjects>div`).eq(2).should("contain","Milestones in Mathematics")
        cy.get(`.subjects>div`).eq(3).should("contain","Mathematical Universality")
        cy.get(`.subjects>div`).eq(4).should("contain","Mathematics Gamification")
        cy.get(`.subjects>div`).eq(5).should("contain","Mathematical Problem-Solving")
        cy.get(`.displayUnits`).should("exist")
        cy.get(`.mouse`).should("exist")
        cy.get(`.mouse1`).should("contain","WELCOME")
        cy.get(`.heart`).should("contain","STUDENTS")
        
    })
    it("veifying content in the welcome page",()=>{
        cy.visit("/welcome")
        cy.wait(5000)

        cy.get(`.logo`).should("exist")
        cy.get(`.livebook`).eq(0).should("exist")
        cy.get(`.welcome`).should("exist")
        cy.get(`.welcomeText>p`).eq(0).should("contain","Welcome to the fun place, where all of the learning and magic happens! Enjoy the journey while you're here.")
        cy.get(`.welcomeText>p`).eq(1).should("exist")
        cy.get(`.mathimage`).should("exist")
        cy.get(`.paragraph`).should("contain","Mathematics is a fascinating subject that holds endless inspiration. It's all about numbers, shapes, and solving problems. ")
        cy.get(`.heart`).should("contain","STUDENTS")
    
    })
})