import BasePage from './Base.page'
import{ assert} from 'chai'
type webElement = WebdriverIO.Element

class LoginPage extends BasePage {

    get userName(): webElement{
        return $('input[name=\'email\']');
    }

    get passWord(): webElement{
        return $('input[name=\'password\']');
    }

    get nextButton(): webElement {
        return $('button[title=\'Next\']');
    }

    get logInButton(): webElement {
        return $('div=Log in');
    }

    get forgotPassword(): webElement {
        return $('h5=Forgot your password?');
    }


    get passwordRequired(): webElement {
        return $('div=Password is required');
    }

    get invalidEmailAdd(): webElement {
        return $('div=Invalid email address');
    }

    get sendTheLink(): webElement {
        return $('div=Send the link');
    }

    get passWordRecoveryMessage(): webElement {
        return $('div[data-test-component=\'passwordRecoveryPage__submitMessage\']');
    }

    get backToLogin(): webElement {
        return $('div*=Back to login')
    }

    get signUp(): webElement {
        return $('div=Sign up');
    }

    /**
     * Enter the username and validate the value attribute set in the text field
     * @param username
     */
    enterUserName(username: string): void {
            this.userName.setValue(username);
           }

    /**
     * Enter the password and validate the value attribute is set in the text field
     * @param password
     */
     enterPassWord(password: string): void {
         this.passWord.setValue(password)
     }

     clickNextButton(): void {
        this.nextButton.click();
     }

     clickForgotPassword(): void {
        browser.setTimeout({ 'implicit': 5000 });
        this.forgotPassword.click();
        browser.setTimeout({ 'implicit': 0 }) //setting back to default
     }

     clickSendTheLink(): void {
        this.sendTheLink.waitForClickable();
        this.sendTheLink.click();
     }

    /**
     * Validate the password recovery link functionality
     * @param username
     */
    validatePasswordRecovery(username: string): void {
            this.enterUserName(username);
            this.nextButton.click();
            assert.equal(this.userName.getAttribute('value'),`${username}`, 'the email address should present in text field');
            browser.setTimeout({ 'implicit': 5000 })
            this.forgotPassword.click();
            this.sendTheLink.waitForClickable();
            this.sendTheLink.click();


    }

}

export default new LoginPage()