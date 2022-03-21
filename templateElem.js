class TemplateElem extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<template>
        <style>
            h1{
                background-color: red;
            }
        </style>
    </template>`
    }
}

customElements.define('template-element',TemplateElem)