
import React from 'react';
{/* we should define a boolean like isTrue */}

isTrue = true;

<div className={isTrue ? 'if-true-here' : 'if-false-here'  }>content</div>

{/* if we have already a clasName and we want to add another class we do this */}

<div className={`main-class ${condition}`}></div>
{/* for example : */}
<div className={`base-class ${isTrue ? 'if-true-here': 'if-false-here'}`}></div>