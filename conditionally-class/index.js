
import React from 'react';
{/* we should define a boolean like isTrue */}

isTrue = true;


<div className={isTrue ? 'if-true-here' : 'if-false-here'  }>content</div>

{/* if we have already a clasName and we want to add another class we do this */}
<div className={`main-class ${condition}`}></div>
{/* for example : */}
<div className={`base-class ${isTrue ? 'if-true-here': 'if-false-here'}`}></div>


{/* another way to do this is to use classnames package */}
import classNames from 'classnames';
{/* after install and import classnames library, we define a class object*/}
const btnClass = classNames('main-class' , {'if-true' : isActive});
{/* first we wrote the classname inside curly brackets and then the condition */}