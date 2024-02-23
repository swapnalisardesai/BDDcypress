class HomePage {
    selector = {
        //1st site
        EcommUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",
        searchProductBox: '[placeholder="Search for Vegetables and Fruits"]',
        productLst: 'h4[class="product-name"]',
        addToCartBtn: '[class="product-action"] button',
        cart: 'img[alt="Cart"]',
        proceedToChkBtn: '[class="action-block"] >  button',
        countryLst: 'select',
        checkBox: '.chkAgree',
        proceedBtn: 'button',

        // 2nd site-Practice Automation
        prcAuto: "https://automationexercise.com/",
        login_singup: 'a[href="/login"]',
        SignUpTxt: ".signup-form> h2",
        signUpName: 'input[name="name"]',
        signUpEMail: 'input[data-qa="signup-email"]',
        signUpBtn: 'button[data-qa="signup-button"]',
        mrsBtn: "#id_gender2",
        password: "#password",
        days: "#days",
        months: "#months",
        year: "#years",
        newsletter: "#newsletter",
        optin: '#optin',
        first_Name: '#first_name',
        last_Name: '#last_name',
        company: '#company',
        address: '#address1',
        country: '#country',
        state: '#state',
        city: '#city',
        zipcode: '#zipcode',
        mobileNo: '#mobile_number',
        createbtn: 'button[data-qa="create-account"]',
        accMsg: ".title.text-center>b",

        //for login with current user
        login:'a[href="/login"]',
        logout:'a[href="/logout"]',
        loginas:'a>b'




    }

    // visitUrl(){
    // cy.visit(this.selector.EcommUrl)
    // }

    VisitUrl(url) {//for multiple url we use parameter
        cy.visit(url)

    }

    searchProduct() {
        cy.get(this.selector.searchProductBox).type('ca')
    }

    SelectProduct(product) {
        cy.get(this.selector.productLst).each((el, i) => {
            cy.log(el.text())
            let vegitable = el.text().replace(' - 1 Kg', ' ').trim()
            if (vegitable == product) {
                cy.get(this.selector.addToCartBtn).eq(i).click({ force: true })
            }
        })
    }
    PlaceOrder() {
        cy.get(this.selector.cart).click()
        cy.get(this.selector.proceedToChkBtn).first().click()
        cy.contains('Place Order').click()
        cy.get(this.selector.countryLst).select('India')
        cy.get(this.selector.checkBox).click()
        cy.get(this.selector.proceedBtn).click()
    }

    //*******************************for practice automation site *******/

    ClickOnBtn(btn) {
        cy.get(btn).click()
    }

    ValidateText(element, value) {
        cy.get(element).should('have.text', value)
    }

    SignUpUser(email) {
        cy.get(this.selector.signUpName).type('vidhi')
        cy.get(this.selector.signUpEMail).type(email)
        cy.get(this.selector.signUpBtn).click()
        //cy.wait(3000)
        cy.contains('Enter Account Information').should('be.visible')
    }

    SignUpUsingFixture(name,email) {
       // cy.fixture('info.json').then((data) => {
           // cy.log(data)
            cy.get(this.selector.signUpName).type(name)
            cy.get(this.selector.signUpEMail).type(email)
            
         
            cy.get(this.selector.signUpBtn).click()
            cy.contains('Enter Account Information').should('be.visible')
       // })
    }


    CreateUser() {
        cy.get(this.selector.mrsBtn).click()
        cy.get(this.selector.password).type('umesh')
        cy.get(this.selector.days).select('9')
        cy.get(this.selector.months).select('February')
        cy.get(this.selector.year).select('1992')
        cy.get(this.selector.newsletter).check()
        cy.get(this.selector.optin).click()
        cy.get(this.selector.first_Name).type('umesh')
        cy.get(this.selector.last_Name).type('patankar')
        cy.get(this.selector.company).type('John Deer')
        cy.get(this.selector.address).type('pune')
        cy.get(this.selector.country).select('India')
        cy.get(this.selector.state).type('Maharashtra')
        cy.get(this.selector.city).type('pune')
        cy.get(this.selector.zipcode).type(411028)
        cy.get(this.selector.mobileNo).type(1122334455)
        cy.get(this.selector.createbtn).click()
        //    cy.get(this.selector.accMsg).should('have.text', 'Account Created!')
        //cy.get('.title').next('p').should('have.text', 'Congratulations! Your new account has been successfully created!')
    }

    //using fixture file
    createUserUsingFixture(data) {

       // cy.fixture(fileName).then((data) => {
            cy.get(this.selector.mrsBtn).click()
            cy.log(data)
            cy.get(this.selector.password).type(data.password)
            cy.get(this.selector.days).select(data.days)
            cy.get(this.selector.months).select(data.months)
            cy.get(this.selector.year).select(data.year)
            cy.get(this.selector.newsletter).check()
            cy.get(this.selector.optin).click()
            cy.get(this.selector.first_Name).type(data.first_Name)
            cy.get(this.selector.last_Name).type(data.last_Name)
            cy.get(this.selector.company).type(data.company)
            cy.get(this.selector.address).type(data.address)
            cy.get(this.selector.country).select(data.country)
            cy.get(this.selector.state).type(data.state)
            cy.get(this.selector.city).type(data.city)
            cy.get(this.selector.zipcode).type(data.zipcode)
            cy.get(this.selector.mobileNo).type(data.mobileNo)
            cy.get(this.selector.createbtn).click()
            cy.get(this.selector.accMsg).should('have.text', 'Account Created!')
      //  })

    }

loginUser(){
    cy.get(this.selector.login).click()
    cy.get(this.selector.logout).should('have.text'," Logout")
    //cy.get(this.selector.loginas).should('have.text',)

}

}



export default HomePage