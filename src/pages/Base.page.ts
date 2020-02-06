export default class BasePage{
    open(): any{
        return browser.url('/login');
    }

    getTitle(): string{
        return browser.getTitle();

    }

    currentUrl() : string {
        return browser.getUrl();
    }

    refresh() : void {
        browser.refresh()
    }

    logoImage(): boolean {
        return $('#Grip-logo').waitForDisplayed();

    }
}

