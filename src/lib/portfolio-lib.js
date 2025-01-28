const PortfolioLib = (function() {
    let state = {};
    let listeners = [];

    // Library code goes here
    function createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        Object.entries(attributes).forEach(([key, value]) => {
            if (key.startsWith('on') && typeof value === 'function') {
                element.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                element.setAttribute(key, value);
            }
        });
        children.forEach(child => {
            if (typeof child == 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        return element;
    }

    function render(component, container) {
        container.innerHTML = '';
        container.appendChild(component());
    }

    function setState(newState) {
        state = { ...state, ...newState}
        listeners.forEach(listener => listener(state));
    }

    function getState() {
        return state;
    }

    function useEffect(callback, dependencies) {
        // Simple implementation of useEffect;
        callback();
    }

    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    }

    return {
        // Public methods and properties
        createElement, 
        render,
        setState,
        getState,
        useEffect,
        subscribe,
    };
})();