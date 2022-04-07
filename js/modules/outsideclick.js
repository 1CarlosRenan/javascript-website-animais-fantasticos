export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener('click', handleOutsideClick);
        })
        element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.addEventListener('click', handleOutsideClick);
            })
            html.removeEventListener('click', handleOutsideClick);
            callback();
        }
    }
}