import $ from 'jquery';

 class MobileMenu  {

  constructor() {
    // spaghetti code - DON'T USE!!!
    // $(".site-header__menu-icon").click(function() {
    //   console.log("the top right icon was clicked");
    // });
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
 }

// The onld way (node js) to import modules
// module.exports = MobileMenu;

// the new way (ES6 way) to export modules
export default MobileMenu;
