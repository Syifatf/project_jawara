import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="super_container">
      {/* Menu */}
      <div className="menu trans_500">
        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="menu_close_container"><div className="menu_close" /></div>
          <div className="logo menu_logo">
            <a href="#">
              <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                <div className="logo_image"><div><img src="images/logo.png" alt /></div></div>
                <div className="logo_content">
                  <div className="logo_text logo_text_not_ie">The Conference</div>
                  <div className="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li className="menu_item"><a href="index.html">Home</a></li>
            <li className="menu_item"><a href="#">About us</a></li>
            <li className="menu_item"><a href="#">Speakers</a></li>
            <li className="menu_item"><a href="#">Tickets</a></li>
            <li className="menu_item"><a href="news.html">News</a></li>
            <li className="menu_item"><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="menu_social">
          <div className="menu_social_title">Follow uf on Social Media</div>
          <ul>
            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
      {/* Home */}
      <div className="home">
        {/* <div class="home_background" style="background-image: url(images/index.jpg)"></div> */}
        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/index.jpg" data-speed="0.8" />
        {/* Header */}
        <header className="header" id="header">
          <div>
            <div className="header_top">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header_top_content d-flex flex-row align-items-center justify-content-start">
                      <div>
                        <a href="#">
                          <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                            <div className="logo_image"><div><img src="images/logo.png" alt /></div></div>
                            <div className="logo_content">
                              <div id="logo_text" className="logo_text logo_text_not_ie">The Conference</div>
                              <div className="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                            </div>
                          </div>
                        </a>	
                      </div>
                      <div className="header_social ml-auto">
                        <ul>
                          <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                      <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_nav" id="header_nav_pin">
              <div className="header_nav_inner">
                <div className="header_nav_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="header_nav_content d-flex flex-row align-items-center justify-content-start">
                          <nav className="main_nav">
                            <ul>
                              <li className="active"><a href="index.html">Home</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="speakers.html">Speakers</a></li>
                              <li><a href="events.html">Events</a></li>
                              <li><a href="news.html">News</a></li>
                              <li><a href="contact.html">Contact</a></li>
                            </ul>
                          </nav>
                          <div className="header_extra ml-auto">
                            <div className="header_search"><i className="fa fa-search" aria-hidden="true" /></div>
                            <div className="button header_button"><a href="#">Buy Tickets Now!</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="search_content d-flex flex-row align-items-center justify-content-end">
                          <form action="#" id="search_container_form" className="search_container_form">
                            <input type="text" className="search_container_input" placeholder="Search" required="required" />
                            <button className="search_container_button"><i className="fa fa-search" aria-hidden="true" /></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </header>
        <div className="home_content_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_date">August 25, 2018</div>
                  <div className="home_title">2018 Public Policy Conference</div>
                  <div className="home_location">Miami Marina Bay, FL</div>
                  <div className="home_text">Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                  <div className="home_buttons">
                    <div className="button home_button"><a href="#">Buy Tickets Now!</a></div>
                    <div className="button home_button"><a href="#">Find out more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro */}
      <div className="intro">
        <div className="intro_content d-flex flex-row flex-wrap align-items-start justify-content-between">
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_1.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">Conference Program</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_2.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">Supersessions</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_3.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">The Speakers</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_4.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">Explore Sessions</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_5.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">Directory</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
          {/* Intro Item */}
          <div className="intro_item">
            <div className="intro_image"><img src="images/intro_6.jpg" alt /></div>
            <div className="intro_body">
              <div className="intro_title"><a href="#">Speakers Schedule</a></div>
              <div className="intro_subtitle">Donec quis metus ac arcu luctus accumsan.</div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="pricing">
        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/pricing.jpg" data-speed="0.8" />
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="pricing_section_title">Choose a plan</div>
            </div>
          </div>
          <div className="row pricing_row">
            {/* Pricing Item */}
            <div className="col-lg-4 pricing_col">
              <div className="pricing_item">
                <div className="pricing_item_content">
                  <div className="pricing_level">Beginner</div>
                  <div className="pricing_price">Free</div>
                  <ul className="pricing_list">
                    <li>3 Conference Tickets</li>
                    <li>Vip Table</li>
                    <li>Drinks</li>
                    <li>Special PASS</li>
                    <li>VIP Dinner</li>
                  </ul>
                  <div className="pricing_info">
                    <a href="#">i</a>
                  </div>
                  <div className="button pricing_button"><a href="#">Order plan</a></div>
                </div>
              </div>
            </div>
            {/* Pricing Item */}
            <div className="col-lg-4 pricing_col">
              <div className="pricing_item pricing_item_mid">
                <div className="pricing_item_content">
                  <div className="pricing_level">recommended</div>
                  <div className="pricing_price">$29<span>90</span></div>
                  <ul className="pricing_list">
                    <li>3 Conference Tickets</li>
                    <li>Vip Table</li>
                    <li>Drinks</li>
                    <li>Special PASS</li>
                    <li>VIP Dinner</li>
                  </ul>
                  <div className="pricing_info">
                    <a href="#">i</a>
                  </div>
                  <div className="button pricing_button"><a href="#">Order plan</a></div>
                </div>
              </div>
            </div>
            {/* Pricing Item */}
            <div className="col-lg-4 pricing_col">
              <div className="pricing_item">
                <div className="pricing_item_content">
                  <div className="pricing_level">Professional</div>
                  <div className="pricing_price">$59<span>90</span></div>
                  <ul className="pricing_list">
                    <li>3 Conference Tickets</li>
                    <li>Vip Table</li>
                    <li>Drinks</li>
                    <li>Special PASS</li>
                    <li>VIP Dinner</li>
                  </ul>
                  <div className="pricing_info">
                    <a href="#">i</a>
                  </div>
                  <div className="button pricing_button"><a href="#">Order plan</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar */}
      {/* Calendar */}
      <div className="calendar">
        <div className="container reset_container">
          <div className="row">
            <div className="col-xl-6 calendar_col">
              <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                  <div><div className="calendar_icon"><img src="images/calendar.svg" alt /></div></div>
                  <div className="calendar_title">28-30 Maret events calendar</div>
                </div>
                <div className="calendar_items">
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_1.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>14:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Agricultural Services and Profesions</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_2.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>15:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Agricultural Processing Machinery &amp; Equipments</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_3.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>17:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Conference calls</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_4.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>20:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Agricultural Raw Material &amp; Products</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 calendar_col">
              <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                  <div><div className="calendar_icon"><img src="images/calendar.svg" alt /></div></div>
                  <div className="calendar_title">27-30 Juni events calendar</div>
                </div>
                <div className="calendar_items">
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_5.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>14:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>talkshow dan presentasi peluang investasi sektor pertanian </div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_6.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>15:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Pameran Produk Unggulan</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_7.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>17:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>Pameran Teknologi</div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                  {/* Calendar Item */}
                  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_8.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                      <div>20:00</div>
                      <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                      <div>talkshow dan presentasi business mathing </div>
                      <div>08 AM - 04 PM</div>
                      <div>Speaker: Daniel Hill</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to action */}
      <div className="cta">
        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/cta_1.jpg" data-speed="0.8" />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cta_content text-center">
                <div className="cta_title">Get your tickets now!</div>
                <div className="button cta_button"><a href="#">Find out more</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer_content">
          <div className="container">
            <div className="row">
              {/* Footer Column */}
              <div className="col-lg-4 footer_col">
                <div className="footer_about">
                  <div>
                    <a href="#">
                      <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                        <div className="logo_image"><div><img src="images/logo.png" alt /></div></div>
                        <div className="logo_content">
                          <div id="logo_text" className="logo_text logo_text_not_ie">The Conference</div>
                          <div className="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                        </div>
                      </div>
                    </a>	
                  </div>
                  <div className="footer_about_text">
                    <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-3 footer_col">
                <div className="footer_links">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Event Dates</a></li>
                    <li><a href="#">Information</a></li>
                    <li><a href="#">Calendar</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-3 footer_col">
                <div className="footer_links">
                  <ul>
                    <li><a href="#">Logistics</a></li>
                    <li><a href="#">Our Partners</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Price Plans</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-2 footer_col">
                <div className="footer_links">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Event Dates</a></li>
                    <li><a href="#">Information</a></li>
                    <li><a href="#">Calendar</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_extra">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_extra_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                  <div className="footer_social">
                    <div className="footer_social_title">Follow us on Social Media</div>
                    <ul className="footer_social_list">
                      <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="footer_extra_right ml-lg-auto text-lg-right">
                    <div className="footer_extra_links">
                      <ul>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Privacy</a></li>
                      </ul>
                    </div>
                    <div className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
