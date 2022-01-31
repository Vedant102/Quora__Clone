import { Widgets } from '@material-ui/icons';
import React from 'react'
import QuoraHeader from './QuoraHeader';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function Quora() {
  return (
    <div className="Quora">
      <QuoraHeader />
      <div className='quora__contens'>
        <div className='quora__content'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>

    </div>
  );
}

export default Quora;