const qs = document.querySelector;
const qsa = (...args) => {
    return Array.from(
        document.querySelector.apply(document, args)
    );
};


export { qs, qsa };
