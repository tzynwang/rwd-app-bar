import React, { memo } from 'react';

function Bar(): React.ReactElement {
  return <div>Bar</div>;
}

export default memo(Bar);
