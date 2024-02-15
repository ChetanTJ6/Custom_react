function reactInject(domElement,reactElement){
      let newElement=document.createElement(reactElement.type);

      newElement.innerHTML=reactElement.children
     for(let prop in reactElement.props)
     {
         newElement.setAttribute(prop,reactElement.props[prop]);
     }
     domElement.appendChild(newElement);
}
let reactElement={
    //this is an object
    type:'a',
    
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'click this is to go Google'

}


let domElement=document.getElementById('root')
reactInject(domElement,reactElement);


