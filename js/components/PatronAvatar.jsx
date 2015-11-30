import React from 'react';

let PatronAvatar = React.createClass({

  selectPatron: function() {
    this.props.selectPatronCallback(this.props.patron);
  },

  render() {
    const patron = this.props.patron;
    return(
      <li className='patron-avatar-list-item' onClick={this.selectPatron}>
        <img className='patron-avatar-image' src={patron.avatarUrl}/>
        <span className='patron-avatar-name'>{patron.name}</span>
      </li>
    );

  }
});

export default PatronAvatar;