import React from 'react';

let PatronAvatar = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <li className='patron-avatar-list-item'>
        <img className='patron-avatar-image' src={patron.avatarUrl}/>
        <span className='patron-avatar-name'>{patron.name}</span>
      </li>
    );

  }
});

export default PatronAvatar;