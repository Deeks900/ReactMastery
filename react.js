import React from "react"
import ReactDOM from "react-dom/client"

// heading = React.createElement('h1', {id: 'head'}, "Let's Revise React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//Create Nested Structure with Siblings as well
// const parentDiv = React.createElement('div', {id:'parent'}, 
//     React.createElement('div', {id:'child'},
//        [
//         React.createElement('h1', {id:'head'}, "Let's Revise React"),
//         React.createElement('h1', {id:'head2'}, "Let's Revise React with Sibling")
//        ] 
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parentDiv);

// //parentDiv is an object which will be converted into HTML by ReactDOM.
// console.log(parentDiv);

//Create more complex structure 

const headDiv = React.createElement('div', {id:'headDiv'},
    [
        React.createElement('div', {id:'child1'}, [
            React.createElement('h1', {id:'head1'}, "Let's Revise React"),
            React.createElement('h1', {id:'head2'}, "Let's Revise React with Sibling")
        ]),
        React.createElement('div', {id:'child2'}, [
            React.createElement('h1', {id:'head3'}, "Let's Revise React with Another Sibling"),
            React.createElement('h1', {id:'head4'}, "Let's Revise React with Yet Another Sibling")
        ])
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headDiv);
