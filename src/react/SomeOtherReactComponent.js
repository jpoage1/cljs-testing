import React from 'react';
import HelloWorld from '../cljs/hello_world'

function SomeOtherReactComponent () {
  console.log(HelloWorld)
  return (<HelloWorld />)
}

export default SomeOtherReactComponent;
