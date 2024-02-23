import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"
//import multiUsers from "../../../../fixtures/infoArr"

let userData=undefined
before(function(){
cy.fixture('info').then(function(user){
    userData=user
})
})



let selector = new HomePage
let email = `${(Math.random()) * 20}patankar@gmail.com`

Given("Open Practice Automation - Sign up page", () => {
    selector.VisitUrl(selector.selector.prcAuto)
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.ValidateText(selector.selector.SignUpTxt, "New User Signup!")
    //selector.SignUpUser(email)
    selector.SignUpUsingFixture(userData.signUpname,email)
})

When("Fill the infomarton for create new User", () => {
    //selector.CreateUser()
  selector.createUserUsingFixture(userData)
})


Then("Validates the User created message", () => {
  // cy.get(selector.selector.accMsg).should('have.text', 'Account Created!')
 selector.loginUser()
})