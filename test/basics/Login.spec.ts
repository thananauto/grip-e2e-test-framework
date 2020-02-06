import LoginPage from 'src/pages/Login.Page'
import {assert} from 'chai';

describe('validate the login page functionality', ()=>{

    const validEmail = 'test@test.com';
    const validPassword = 'password';

    beforeEach(()=>{
        LoginPage.open();
        assert.isTrue(LoginPage.logoImage(), 'Logo is displayed');
    })


    it('verify the login functionality', () =>{
        LoginPage.enterUserName(validEmail);
        assert.equal(LoginPage.userName.getAttribute('value'),`${validEmail}`, 'the email address should present in text field');
        LoginPage.nextButton.click();
        LoginPage.enterPassWord(validPassword);
        assert.equal(LoginPage.passWord.getAttribute('value'),`${validPassword}`, 'the password should present in text field');
        LoginPage.logInButton.click();
        // TODO: Assert the login landing screen
    });

    var emailAddress = ['test.com', 'e @test.com', 'test@^&.com', '123456'] // list of wrong email address

    emailAddress.forEach((email) =>
    it(`verify the error message of email:${email} in text field`, () =>{
       LoginPage.enterUserName(email);
       assert.isTrue(LoginPage.invalidEmailAdd.isDisplayed(), 'Invalid email address error message should display');
       const nextButtonAttr = LoginPage.nextButton.getAttribute('data-test-component');
       assert.include(nextButtonAttr,'disabled', 'Next button to be disabled');
     }))


    it('verify the error message of password field', ()=>{
       LoginPage.enterUserName(validEmail);
       LoginPage.nextButton.click();
       LoginPage.enterPassWord('p');
       browser.keys(['\uE003', '\uE004']);
       assert.isTrue(LoginPage.passwordRequired.isDisplayed(), 'password required error message should display');
    })

    it('verify the password recover functionality', () =>{

       const email= 'test@test.com';
       //LoginPage.validatePasswordRecovery(email);
       LoginPage.enterUserName(email);
       LoginPage.clickNextButton();

       assert.equal(LoginPage.userName.getAttribute('value'),`${email}`, 'the email address should present in text field');
       LoginPage.clickForgotPassword();
       LoginPage.clickSendTheLink();   
       assert.include(LoginPage.currentUrl(),'password-recovery');
       assert.include(LoginPage.passWordRecoveryMessage.getText(), 'If we find a corresponding account to the email you have specified, we will send you a password reset email shortly.');
       assert.include(LoginPage.passWordRecoveryMessage.getText(), 'Please note that the password reset link expires within a few hours and do make sure your spam folder in case you don\'t receive the email shortly.');
       assert.include(LoginPage.passWordRecoveryMessage.getText(), 'Thank you');
       LoginPage.backToLogin.click();

    });

    it('validate signup button is diplayed', ()=>{
        assert.isTrue(LoginPage.signUp.isDisplayed(), 'SignUp button should be displayed')
    });

});