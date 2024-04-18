import React from 'react';
import './bootstrap.css'; // Import bootstrap.css
import './rotating-card.css'; // Import rotating-card.css
import './pe-icon-7-stroke.css'; // Import pe-icon-7-stroke.css
import $ from 'jquery'; // Import jQuery

class RotatingCard extends React.Component {
  componentDidMount() {
    $('[rel="tooltip"]').tooltip();

    $('a.scroll-down').click(function(e){
      e.preventDefault();
      const scroll_target = $(this).data('href');
      $('html, body').animate({
        scrollTop: $(scroll_target).offset().top - 60
      }, 1000);
    });
  }

  rotateCard(btn) {
    const $card = $(btn).closest('.card-container');
    if($card.hasClass('hover')){
      $card.removeClass('hover');
    } else {
      $card.addClass('hover');
    }
  }

  render() {
    return (
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          {/* Navbar content */}
        </nav>

        {/* Card content */}
        <div className="row">
          {/* Card 1 */}
          {/* Card 2 */}
          {/* Card 3 */}
        </div>

        {/* Footer */}
        <div className="white-board">
          {/* Footer content */}
        </div>
      </div>
    );
  }
}

export default RotatingCard;
